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

  addFavorite({ user_id, item_option_id, count }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const order = await queryRunner.query(
          `select * from orders where user_id = $1 and status='basket' limit 1`,
          [user_id, item_id]
        );
        const basket_id = order.id;

        await queryRunner.query(
          `insert into order_items (order_id, item_option_id, count) values ($1,$2,$3)`,
          [basket_id, item_option_id, count]
        );

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

  editFavorite({ user_id, item_option_id, count }) {
    return new Promise(async (res, rej) => {
      return new Promise(async (res, rej) => {
        const connection = await tOrmCon;

        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();

        await queryRunner.startTransaction();

        try {
          const order = await queryRunner.query(
            `select * from orders where user_id = $1 and status='basket' limit 1`,
            [user_id, item_id]
          );
          const basket_id = order.id;

          await queryRunner.query(
            `update order_items set count = $3 where order_id=$1, item_option_id=$2;`,
            [basket_id, item_option_id, count]
          );

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
    });
  }

  deleteFavorite({ user_id, item_option_id }) {
    return new Promise(async (res, rej) => {
      return new Promise(async (res, rej) => {
        const connection = await tOrmCon;

        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();

        await queryRunner.startTransaction();

        try {
          const order = await queryRunner.query(
            `select * from orders where user_id = $1 and status='basket' limit 1`,
            [user_id, item_id]
          );
          const basket_id = order.id;

          await queryRunner.query(
            `delete from order_items where order_id=$1, item_option_id=$2;`,
            [basket_id, item_option_id]
          );

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
    });
  }

  getFavorites({ user_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select o.*, i.title, count, size, material, price from 
          orders o 
          left join order_items oi on oi.order_id = o.id
          left join item_options io on oi.item_option_id = io.id
          left join items i on io.item_id = i.id
          where o.user_id = $1 and o.status='basket'`,
          [user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getPosts({
    id,
    page = 1,
    take = 10,
    searchQuery,
    sort = "newing",
    category,
  }) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOnePost(id)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      category = category || null;

      const orderQueryPart =
        sort === "newing"
          ? "publication_date DESC"
          : sort === "ascending"
          ? "price"
          : "price DESC";

      const connection = await tOrmCon;
      connection
        .query(
          `select p.*,json_agg(json_build_object('size', io.size, 'material', io.material, 'price', io.price))  options_array
          ,min(io.price) price
              from public.items p
              left join item_options io on p.id = io.item_id
              where (title like $1 or $1 is NULL) 
              and (p.category_name = $2 or $2 is NULL)  
              group by p.id
              order by ${orderQueryPart}
              LIMIT $3 OFFSET $4`,
          [searchQuery, category, take, skip]
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
    categoryName,
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

        const data = await queryRunner.manager.getRepository("Item").save({
          title,
          description,
          text,
          category_name: categoryName,
          image_list: fNameFullPaths,
        });

        const { id } = data;
        const oo = JSON.parse(optionsObject);
        for (let m in oo) {
          const sizes = oo[m];
          for (let s in sizes) {
            const price = sizes[s];
            console.log(s, m, price);
            await queryRunner.query(
              "insert into item_options (item_id,size,material,price) values ($1,$2,$3,$4)",
              [id, s, m, price]
            );
          }
        }

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

  editPost({
    id,
    title,
    categoryName,
    description,
    images,
    previewsBinary,
    optionsObject,
  }) {
    return new Promise(async (res, rej) => {
      let fNameFullPaths = Array.isArray(previewsBinary)
        ? previewsBinary.map((preview) => this.transformPreviewName(preview))
        : [this.transformPreviewName(previewsBinary)];

      console.log(previewsBinary, images, fNameFullPaths);
      const images_array = Array.isArray(images) ? images : [images];

      fNameFullPaths = [
        ...new Set([...fNameFullPaths, ...images_array]),
      ]?.filter((el) => el);

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const data = await queryRunner.manager
          .getRepository("Item")
          .createQueryBuilder()
          .update({
            title,
            category_name: categoryName ?? null,
            description,
            image_list: fNameFullPaths,
          })
          .where({
            id: id,
          })
          .returning("*")
          .execute();

        await queryRunner.query("delete from item_options where item_id = $1", [
          id,
        ]);

        const oo = JSON.parse(optionsObject);
        for (let m in oo) {
          const sizes = oo[m];
          for (let s in sizes) {
            const price = sizes[s];
            console.log(s, m, price);
            await queryRunner.query(
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
