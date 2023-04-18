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
    this.getPosts = this.getPosts.bind(this);
    this.transformPreviewName = this.transformPreviewName.bind(this);
    this.add = this.add.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  getPosts({
    id,
    page = 1,
    take = 10,
    searchQuery,
    sort = "newing",
    category,
    size,
    material,
    user_id,
    item_option_id,
    mainside_id,
    backside_id,
  }) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      category = category || null;
      user_id = user_id || null;

      const orderQueryPart =
        sort === "newing"
          ? "publication_date DESC"
          : sort === "ascending"
          ? "price"
          : "price DESC";

      const connection = await tOrmCon;

      if (mainside_id)
        connection
          .query(
            `select p.*,
          json_agg(json_build_object('id', io.id, 'size', io.size, 'material', io.material, 'price', io.price))  options_array
          ,min(io.price) price, case when count(o.id) > 0 then true else false end as is_favorite
              from public.items p
              left join item_options io on p.id = io.item_id
              left join order_items oi on io.id = oi.item_option_id
              left join orders o on o.id = oi.order_id
              where oi.mainside_id = $1
              group by p.id
              limit 1`,
            [mainside_id]
          )
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      else if (backside_id)
        connection
          .query(
            `select p.*,
          json_agg(json_build_object('id', io.id, 'size', io.size, 'material', io.material, 'price', io.price))  options_array
          ,min(io.price) price, case when count(o.id) > 0 then true else false end as is_favorite
              from public.items p
              left join item_options io on p.id = io.item_id
              left join order_items oi on io.id = oi.item_option_id
              left join orders o on o.id = oi.order_id
              left join order_items oi2 on oi2.mainside_id = io.id
              where oi2.item_option_id = $1
              group by p.id
              limit 1`,
            [backside_id]
          )
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      else {
        const query = user_id
          ? `select p.*,json_agg(json_build_object('id', io.id, 'size', io.size, 'material', io.material, 'price', io.price))  options_array
            ,min(io.price) price, 
            case when count(o.id) > 0 then true else false end as is_favorite
                from public.items p
                left join item_options io on p.id = io.item_id
                left join order_items oi on io.id = oi.item_option_id
                left join orders o on o.id = oi.order_id
                where (title like $1 or $1 is NULL) 
                and $6::int is not NULL
                and $7::varchar is NULL
                and $8::varchar is NULL
                and $9::int is NULL
                and (p.category_name = $2 or $2 is NULL)  
                and (p.id = $3 or $3 is NULL)  
                group by p.id
                order by ${orderQueryPart}
                LIMIT $4 OFFSET $5`
          : `select p.*,json_agg(json_build_object('id', io.id, 'size', io.size, 'material', io.material, 'price', io.price))  options_array
                ,min(io.price) price
                    from public.items p
                    left join item_options io on p.id = io.item_id
                    where (title like $1 or $1 is NULL) 
                    and $6::int is NULL
                    and $7::varchar is NULL
                    and $8::varchar is NULL
                    and $9::int is NULL
                    and (p.category_name = $2 or $2 is NULL)  
                    and (p.id = $3 or $3 is NULL)  
                    group by p.id
                    order by ${orderQueryPart}
                    LIMIT $4 OFFSET $5`;
        connection
          .query(query, [
            searchQuery,
            category,
            id,
            take,
            skip,
            user_id,
            size,
            material,
            item_option_id,
          ])
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      }
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
