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
    this.getPosts = this.getPosts.bind(this);
    this.saveReturningFileName = this.saveReturningFileName.bind(this);
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
    user_id,
    item_option_id,
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
      {
        const query = user_id
          ? `select p.*,json_agg(DISTINCT jsonb_build_object('id', io.id, 'name', io.name,'stock', io.stock, 'photos', io.photos))  options_array,
            price, select_name,
            case when count(
              case when 
                o.user_id = $6 and o.status = 'basket'
              then 1 else NULL end
              ) > 0 then true else false end as is_favorite,
              sum(
                case when 
                  o.user_id = $6 and o.status = 'basket'
                then oi.count else NULL end
                ) count_favourites
                from public.items p
                left join categories c on c.name = p.category_name
                left join item_options io on p.id = io.item_id
                left join order_items oi on io.id = oi.item_option_id
                left join orders o on o.id = oi.order_id
                where (lower(title) like lower($1) or $1 is NULL) 
                and (p.category_name = $2 or $2 is NULL)  
                and (p.id = $3 or $3 is NULL)  
                and io.stock > 0
                and (oi.item_option_id = $7::bigint or $7::bigint is NULL)
                group by p.id,c.name
                order by ${orderQueryPart}
                LIMIT $4 OFFSET $5`
          : `select p.*,json_agg(DISTINCT jsonb_build_object('id', io.id, 'name', io.name,'stock', io.stock, 'photos', io.photos))  options_array
                 ,price, select_name
                    from public.items p
                    left join item_options io on p.id = io.item_id
                    where (lower(title) like lower($1) or $1 is NULL) 
                    and $6::bigint is NULL
                    and $7::bigint is NULL
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
            item_option_id,
          ])
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      }
    });
  }

  async saveReturningFileName(image, isPreview) {
    if (typeof image === String) return image;

    let fName = image?.name;
    console.log(image);

    let fNameFullPath;
    if (fName) {
      let fNameSplit = fName.split(".");
      const fileFormat = fNameSplit[fNameSplit.length - 1];
      fNameFullPath = image.md5 + "." + fileFormat;
      await image?.mv("public/pics/" + fNameFullPath);

      console.log(image.mimetype.split("/")[0]);

      if (fileFormat !== "webp" && image.mimetype.split("/")[0] === "image")
        await webp
          .cwebp(
            `public/pics/${fNameFullPath}`,
            `public/pics/${image.md5}.webp`,
            "-q 80"
          )
          .then(async (r) => {
            if (isPreview) {
              await webp
                .cwebp(
                  `public/pics/${fNameFullPath}`,
                  `public/pics/${image.md5}_preview.webp`,
                  "-q 90 -resize 480 0"
                )
                .catch((e) => console.log(e));
            }
            await fs.unlink(`public/pics/${fNameFullPath}`).catch((e) => {});
            fNameFullPath = image.md5 + ".webp";
          })
          .catch((e) => {
            console.log(e);
          });
    }
    return fNameFullPath;
  }

  add({
    title,
    text,
    categoryName,
    photosBinary,
    photos,
    price,
    saleCount,
    salePrice,
    options_array = [],
    select_name,
    description,
    previewBinary,
    preview,
    puffs_count,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const previewName = previewBinary
          ? await this.saveReturningFileName(previewBinary, true)
          : preview;

        const data = await queryRunner.manager.getRepository("Item").save({
          title,
          description,
          text,
          price,
          saleCount,
          salePrice,
          category_name: categoryName,
          select_name,
          puffs_count,
          preview: previewName,
        });

        const { id } = data;
        const oa_parsed = JSON.parse(options_array);
        for (let optionIndex in oa_parsed) {
          const { name, stock } = oa_parsed[optionIndex];

          let fNameFullPaths = Array.isArray(photosBinary[optionIndex])
            ? await Promise.all(
                photosBinary[optionIndex].map(
                  async (preview) => await this.saveReturningFileName(preview)
                )
              )
            : [await this.saveReturningFileName(photosBinary[optionIndex])];
          const images_array = Array.isArray(photos[optionIndex])
            ? photos[optionIndex]
            : [photos[optionIndex]];

          console.log(optionIndex, fNameFullPaths, photosBinary[optionIndex]);

          fNameFullPaths = [
            ...new Set([...images_array, ...fNameFullPaths]),
          ]?.filter((el) => el);

          await queryRunner.query(
            "insert into item_options (item_id,name,stock,photos ) values ($1,$2,$3,$4)",
            [id, name, stock, fNameFullPaths]
          );
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
    text,
    categoryName,
    photosBinary,
    photos,
    price,
    saleCount,
    salePrice,
    options_array = [],
    select_name,
    description,
    previewBinary,
    preview,
    puffs_count,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const previewName = previewBinary
          ? await this.saveReturningFileName(previewBinary, true)
          : preview;

        const data = await queryRunner.manager
          .getRepository("Item")
          .createQueryBuilder()
          .update({
            title,
            description,
            text,
            price,
            saleCount,
            salePrice,
            category_name: categoryName,
            select_name,
            preview: previewName,
            puffs_count,
          })
          .where({
            id: id,
          })
          .returning("*")
          .execute();

        const oa_parsed = JSON.parse(options_array);

        let idArray = [];

        for (let optionIndex in oa_parsed) {
          const { name, stock, id: editId } = oa_parsed[optionIndex];

          let fNameFullPaths = Array.isArray(photosBinary[optionIndex])
            ? await Promise.all(
                photosBinary[optionIndex].map(
                  async (preview) => await this.saveReturningFileName(preview)
                )
              )
            : [await this.saveReturningFileName(photosBinary[optionIndex])];
          const images_array = Array.isArray(photos[optionIndex])
            ? photos[optionIndex]
            : [photos[optionIndex]];

          console.log(optionIndex, fNameFullPaths, photosBinary[optionIndex]);

          fNameFullPaths = [
            ...new Set([...images_array, ...fNameFullPaths]),
          ]?.filter((el) => el);

          if (editId) {
            idArray.push(editId);
            await queryRunner.query(
              "update item_options set item_id = $1, name=$2,stock=$3,photos=$4 where id = $5",
              [id, name, stock, fNameFullPaths, editId]
            );
          } else {
            const newId = (
              await queryRunner.query(
                "insert into item_options (item_id,name,stock,photos ) values ($1,$2,$3,$4) returning id",
                [id, name, stock, fNameFullPaths]
              )
            )?.[0]?.id;

            console.log(newId);

            idArray.push(newId);
          }
        }

        await queryRunner.query(
          "delete from item_options where item_id = $1 and not (id = any($2))",
          [id, idArray]
        );

        console.log(idArray);

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
