const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class UsersService {
  constructor() {
    this.transformPreviewName = this.transformPreviewName.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
  }

  transformPreviewName(image) {
    if (typeof image === String) return image;
    let fName = image?.name;
    let fNameFullPath;
    if (fName) {
      let fNameSplit = fName.split(".");

      fNameFullPath = image?.md5 + "." + fNameSplit[fNameSplit.length - 1];
      image?.mv("public/pics/" + fNameFullPath);
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
        const fNameFullPath = this.transformPreviewName(previewBinary);

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
      const fNameFullPath = this.transformPreviewName(previewBinary);

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
