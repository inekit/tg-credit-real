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
    this.getOnePost = this.getOnePost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.transformPreviewName = this.transformPreviewName.bind(this);
    this.add = this.add.bind(this);
    this.editPost = this.editPost.bind(this);

    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

  getOnePost(id) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select p.*, array_agg(ptt.tags_name) tags_array
                      from public.items p
                      left join public.items_tags_tags ptt on p.id = ptt.items_id
                      where p.id = $1
                      group by p.id`,
          [id]
        )
        .then(async (postData) => {
          if (!postData?.[0]) rej(new NotFoundError());

          return res(postData?.[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  addFavorite({ user_id, item_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(`insert into favorites (user_id, item_id) values ($1,$2)`, [
          user_id,
          item_id,
        ])
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  deleteFavorite({ user_id, item_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      console.log({ user_id, item_id });

      connection
        .query(`delete from favorites where user_id = $1 and item_id = $2`, [
          user_id,
          item_id,
        ])
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getFavorites({ id, page = 1, take = 10, searchQuery, distinct, user_id }) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      if (!searchQuery) searchQuery = undefined;
      else searchQuery = `%${searchQuery}%`;

      connection
        .query(
          `select *, TRUE is_favorite from favorites f left join items i on f.item_id = i.id
          where (
            lower(title) like lower($1) 
            or $1 is NULL
            )
            and user_id = $4
            order by id 
          LIMIT $2 OFFSET $3`,
          [searchQuery, take, skip, user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getPosts({ id, page = 1, take = 10, projectName, searchQuery }) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOnePost(id)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      projectName = projectName || null;

      const connection = await tOrmCon;
      connection
        .query(
          `select p.*,
          JSON_ARRAYAGG(JSON_OBJECT('item_id', item_id, 'size', size, 'material', material, 'price', price)) options_array
              from public.items p
              left join item_options io on p.id = io.item_id
              where (title like $1 or $1 is NULL) 
              and (p.category_name = $2 or $2 is NULL)  
              group by p.id
              order by publication_date DESC
              LIMIT $3 OFFSET $4`,
          [searchQuery, projectName, take, skip]
        )
        .then((data) => res(data))
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  transformTagsArray(tagsArray) {
    let tagObjs;
    if (typeof tagsArray === "object") {
      tagObjs = tagsArray?.map((name) => {
        return {
          name,
        };
      });
    } else if (typeof tagsArray === "string") {
      tagObjs = [{ name: tagsArray }];
    } else tagObjs = [];

    return tagObjs;
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

  add({
    title,
    text,
    optionsObject,
    projectName,
    previewsBinary,
    description,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const fNameFullPaths = Array.isArray(previewsBinary)
          ? previewsBinary.map((preview) => this.transformPreviewName(preview))
          : [this.transformPreviewName(previewsBinary)];

        const { id } = queryRunner.manager
          .getRepository("Item")
          .save({
            title,
            description,
            text,
            category_name: projectName,
            image_list: fNameFullPaths,
          })
          .returning("id")
          .execute();

        for (m in optionsObject) {
          const sizes = optionsObject[m];
          for (s in sizes) {
            const price = sizes[s];
            queryRunner.query(
              "insert into item_options (item_id,size,material,price) values ($1,$2,$3,$4)",
              [id, s, m, price]
            );
          }
        }

        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }

  editPost({
    id,
    text,
    title,
    projectName,
    description,
    tagsArray,
    images,
    previewsBinary,
    optionsObject,
  }) {
    return new Promise(async (res, rej) => {
      let fNameFullPaths = Array.isArray(previewsBinary)
        ? previewsBinary.map((preview) => this.transformPreviewName(preview))
        : [this.transformPreviewName(previewsBinary)];

      console.log(previewsBinary, images, fNameFullPaths);

      fNameFullPaths = [...new Set([...fNameFullPaths, ...images])];

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        await queryRunner.query(
          `delete from items_tags_tags where items_id = $1;`,
          [id]
        );
        await queryRunner.query(
          `insert into items_tags_tags (items_id, tags_name) 
                 select $1 as items_id, unnest as tags_name from  unnest($2::text[])`,
          [id, tagsArray]
        );

        const data = await queryRunner.manager
          .getRepository("Item")
          .createQueryBuilder()
          .update({
            title,
            text,
            category_name: projectName,
            description,
            image_list: fNameFullPaths,
          })
          .where({
            id: id,
          })
          .returning("*")
          .execute();

        queryRunner.query("delete from item_options where item_id = $1", [id]);

        for (m in optionsObject) {
          const sizes = optionsObject[m];
          for (s in sizes) {
            const price = sizes[s];
            queryRunner.query(
              "insert into item_options (item_id,size,material,price) values ($1,$2,$3,$4)",
              [id, s, m, price]
            );
          }
        }

        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }
}

module.exports = new UsersService();
