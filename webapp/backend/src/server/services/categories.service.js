const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
const webp = require("webp-converter");
webp.grant_permission();
const fs = require("fs").promises;

class UsersService {
  constructor() {
    this.saveReturningFileName = this.saveReturningFileName.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
  }

  get({ category }) {
    return new Promise(async (res, rej) => {
      category = category || null;

      const connection = await tOrmCon;
      {
        const query = `select c.category_name, json_agg(DISTINCT jsonb_build_object('id', c.id, 'name', c.title,'title', c.preview, 'preview'))  channels_array
                    from public.channels c
                    where (c.category_name = $1 or $1 is NULL)  
                    group by c.id, c.category_name
                    order by c.category_name,id`;
        connection
          .query(query, [category])
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      }
    });
  }

  async saveReturningFileName(image) {
    if (typeof image === String) return image;

    let fName = image?.name;
    console.log("1", image);

    let fNameFullPath;
    if (fName) {
      let fNameSplit = fName.split(".");
      const fileFormat = fNameSplit[fNameSplit.length - 1];
      fNameFullPath = image.md5 + "." + fileFormat;
      await image?.mv("public/pics/" + fNameFullPath);

      if (fileFormat !== "webp")
        await webp
          .cwebp(
            `public/pics/${fNameFullPath}`,
            `public/pics/${image.md5}.webp`,
            "-q 80"
          )
          .then(async (r) => {
            await fs.unlink(`public/pics/${fNameFullPath}`).catch((e) => {});
            fNameFullPath = image.md5 + ".webp";
            console.log("1", fNameFullPath);
          })
          .catch((e) => {
            console.log(e);
            console.log(22);
          });
    }
    return fNameFullPath;
  }

  add({ name, description, image, previewBinary }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const fNameFullPath = await this.saveReturningFileName(previewBinary);

        const data = await queryRunner.manager.getRepository("Category").save({
          name,
          description,
          preview: fNameFullPath,
        });

        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }

  edit({ name, old_name, description, image, previewBinary }) {
    return new Promise(async (res, rej) => {
      const fNameFullPath = await this.saveReturningFileName(previewBinary);

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const data = await queryRunner.manager
          .getRepository("Category")
          .createQueryBuilder()
          .update({
            name,
            description,
            preview: fNameFullPath,
          })
          .where({
            name: old_name,
          })
          .returning("*")
          .execute();

        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        await queryRunner.rollbackTransaction();

        console.log(error);
        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }
}

module.exports = new UsersService();
