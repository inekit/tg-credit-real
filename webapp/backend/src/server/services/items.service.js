const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class UsersService {
  constructor() {
    this.getOne = this.getOne.bind(this);

    this.getAll = this.getAll.bind(this);
    this.sendFiles = this.sendFiles.bind(this);
  }

  getOne(id) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(`select * from items where id = $1`, [id])
        .then(async (postData) => {
          if (!postData?.[0]) rej(new NotFoundError());

          return res(postData?.[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getAll(
    {
      id,
      page = 1,
      take = 100,
      property_class,
      sale_percent_min,
      sale_percent_max,
      commissioning_year,
      meter_price_min,
      meter_price_max,
      searchQuery,
    },
    ctx
  ) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOne(id)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      if (!searchQuery) searchQuery = undefined;
      else searchQuery = `%${searchQuery}%`;
      //              and (lower(username) like lower($5) or $5 is NULL)

      connection
        .query(
          `select * from items 
          where (property_class = $1 or $1 is NULL)
          and ((sale_percent > $2 or $2 is NULL) and (sale_percent < $3 or $3 is NULL)) 
          and (commissioning_year = $4 or $4 is NULL)
          and ((meter_price > $5 or $5 is NULL) and (meter_price < $6 or $6 is NULL))
          and (
            lower(name) like lower($7) 
            or lower(company_name) like lower($7)
            or lower(city_name) like lower($7)
            or lower(developer_name) like lower($7)
            or lower(declaration) like lower($7)
            or lower(address) like lower($7)
            or lower(material) like lower($7)
            or lower(finish_type) like lower($7)
            or lower(description) like lower($7)
            or lower(metro_1) like lower($7)
            or lower(metro_2) like lower($7)
            or lower(metro_3) like lower($7)
            or $7 is NULL
            )
          LIMIT $8 OFFSET $9`,
          [
            //            or property_class like lower($7)
            property_class,
            sale_percent_min,
            sale_percent_max,
            commissioning_year,
            meter_price_min,
            meter_price_max,
            searchQuery,
            take,
            skip,
          ]
        )
        .then(async (data) => {
          /*for (let d of data) {
            if (d.photo)
              d.photo = (
                await ctx.telegram.getFileLink(d.photo).catch(() => {})
              )?.href;
          }*/
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  sendFiles({ user_id, item_id }, ctx) {
    return new Promise(async (res, rej) => {
      console.log(user_id, item_id);
      await ctx.telegram.sendMessage(user_id, item_id).catch(console.log);
      await ctx.telegram
        .sendMessage(user_id, ctx.getTitle("ITEM_INFO_TITLE"), {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Получить бесплатную консультацию",
                  callback_data: "consult",
                },
              ],
              [{ text: "Cкачать ПД", callback_data: "pd-" + item_id }],
              [
                {
                  text: "Скачать презентацию",
                  callback_data: "presentation-" + item_id,
                },
              ],
            ],
          },
        })
        .catch(console.log);
      res();
    });
  }
}

module.exports = new UsersService();
