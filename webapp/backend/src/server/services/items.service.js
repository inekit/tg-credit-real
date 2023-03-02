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
    this.getFavorites = this.getFavorites.bind(this);
    this.getAll = this.getAll.bind(this);
    this.sendFiles = this.sendFiles.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
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

  addFavorite({ user_id, item_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      console.log({ user_id, item_id });
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

  getFavorites({ id, page = 1, take = 10, searchQuery, distinct }, ctx) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      if (!searchQuery) searchQuery = undefined;
      else searchQuery = `%${searchQuery}%`;

      connection
        .query(
          `select *, TRUE is_favorite from favorites f left join items i on f.item_id = i.id
          where (
            lower(name) like lower($1) 
            or lower(company_name) like lower($1)
            or lower(city_name) like lower($1)
            or lower(developer_name) like lower($1)
            or lower(declaration) like lower($1)
            or lower(address) like lower($1)
            or lower(material) like lower($1)
            or lower(finish_type) like lower($1)
            or lower(description) like lower($1)
            or lower(metro_1) like lower($1)
            or lower(metro_2) like lower($1)
            or lower(metro_3) like lower($1)
            or $1 is NULL
            )
            order by id 
          LIMIT $2 OFFSET $3`,
          [searchQuery, take, skip]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getAll(
    {
      id,
      page = 1,
      take = 10,
      property_class,
      sale_percent_min,
      sale_percent_max,
      commissioning_year,
      meter_price_min,
      meter_price_max,
      searchQuery,
      distinct,
      city_name,
      user_id,
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

      const querySubstr1 = distinct
        ? "SELECT DISTINCT ON (name) id, i.*, user_id is_favorite FROM items i"
        : "SELECT DISTINCT ON (declaration) id, i.*, user_id is_favorite FROM items i";
      const querySubstr2 = distinct
        ? "ORDER BY name DESC, id"
        : "ORDER BY declaration DESC, id";

      connection
        .query(
          `${querySubstr1} 
          left join favorites f on i.id = f.item_id 
          where (property_class = $1 or $1 is NULL) and
          (user_id = $11 or user_id is NULL)
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
            and (city_name = $8 or $8 is NULL)
            ${querySubstr2} 
          LIMIT $9 OFFSET $10`,
          [
            property_class,
            sale_percent_min,
            sale_percent_max,
            commissioning_year,
            meter_price_min,
            meter_price_max,
            searchQuery,
            city_name,
            take,
            skip,
            user_id,
          ]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  sendFiles({ user_id, item_id }, ctx) {
    return new Promise((res, rej) => {
      ctx.telegram
        .sendMessage(user_id, ctx.getTitle("ITEM_INFO_TITLE"), {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Получить бесплатную консультацию",
                  callback_data: "consult-" + item_id,
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
