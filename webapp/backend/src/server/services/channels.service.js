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

class ChannelsService {
  constructor() {
    this.get = this.get.bind(this);
    this.saveReturningFileName = this.saveReturningFileName.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
  }

  get({ id, page = 1, take = 10, searchQuery, category, user_id }) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      category = category || null;
      user_id = user_id || null;

      const connection = await tOrmCon;
      {
        const query = `select c.*, sum(case when uf.user_id=$6 then 1 else 0 end)::int is_favorite
                    from public.channels c
                    left join users_favorites uf on uf.channel_id=c.id 
                    where (lower(title) like lower($1) or $1 is NULL)
                    and (c.category_name = $2 or $2 is NULL)  
                    and (c.id = $3 or $3 is NULL)  
                    group by c.id
                    order by id
                    LIMIT $4 OFFSET $5`;
        connection
          .query(query, [searchQuery, category, id, take, skip, user_id])
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
    price,
    select_name,
    description,
    previewBinary,
    preview,
    participants_count,
    post_reach,
    err,
    cpm,
    man_percent,
    l18,
    l24,
    l34,
    l44,
    l54,
    l100,
    tgstat_link,
    telemetr_link,
    tgstat_id,
    price_1,
    price_2,
    price_3,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const previewName = previewBinary
        ? await this.saveReturningFileName(previewBinary, true)
        : preview;

      const data = await connection.manager
        .getRepository("Channel")
        .save({
          title,
          description,
          text,
          // price,
          category_name: categoryName,
          select_name,
          preview: previewName,
          participants_count,
          post_reach,
          err,
          cpm,
          man_percent,
          age: { l18, l24, l34, l44, l54, l100 },
          prices: { price_1, price_2, price_3, price },
          tgstat_link,
          telemetr_link,
          tgstat_id,
        })
        .catch((e) => {
          console.log(e);
          rej(e);
        })
        .then((data) => res(data));
    });
  }

  edit({
    id,
    title,
    text,
    categoryName,
    price,
    select_name,
    description,
    previewBinary,
    preview,
    participants_count,
    post_reach,
    err,
    cpm,
    man_percent,
    l18,
    l24,
    l34,
    l44,
    l54,
    l100,
    tgstat_link,
    telemetr_link,
    tgstat_id,
    price_1,
    price_2,
    price_3,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const previewName = previewBinary
        ? await this.saveReturningFileName(previewBinary, true)
        : preview;

      const data = await connection
        .getRepository("Channel")
        .createQueryBuilder()
        .update({
          title,
          description,
          text,
          // price,
          category_name: categoryName,
          select_name,
          preview: previewName,
          participants_count,
          post_reach,
          err,
          cpm,
          man_percent,
          age: { l18, l24, l34, l44, l54, l100 },
          prices: { price_1, price_2, price_3, price },
          tgstat_link,
          telemetr_link,
          tgstat_id,
        })
        .where({
          id: id,
        })
        .returning("*")
        .execute()
        .catch((e) => {
          console.log(e);
          rej(e);
        })
        .then((data) => res(data));
    });
  }
}

module.exports = new ChannelsService();
