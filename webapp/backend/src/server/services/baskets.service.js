const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class BasketsService {
  constructor() {
    this.getFavorites = this.getFavorites.bind(this);
    this.getBasketData = this.getBasketData.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.connect = this.connect.bind(this);
  }

  connect({ user_id, channel_id }, ctx) {
    return new Promise(async (res, rej) => {
      ctx.telegram
        .sendMessage(user_id, "Нажмите кнопку ниже, чтобы оставить заявку", {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Связаться",
                  callback_data: `connect_${user_id}_${channel_id}`,
                },
              ],
            ],
          },
        })
        .catch((err) => {
          rej({ error: err });
        });
      res(true);
    });
  }

  addFavorite({ user_id, channel_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;
      await connection
        .query(
          `insert into users_favorites (user_id, channel_id) values ($1,$2)`,
          [user_id, channel_id]
        )
        .catch((error) => rej(new MySqlError(error)))
        .then((data) => res(data));
    });
  }

  deleteFavorite({ user_id, channel_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;
      await connection
        .query(
          `delete from users_favorites where user_id =$1 and channel_id = $2`,
          [user_id, channel_id]
        )
        .catch((error) => rej(new MySqlError(error)))
        .then((data) => res(data));
    });
  }

  getFavorites({ user_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select c.category_name name, json_agg(DISTINCT jsonb_build_object('id', c.id, 'title', c.title,
        'description', c.description, 'preview', c.preview,'participants_count',c.participants_count))  channels_array
                   from users_favorites uf left join public.channels c on uf.channel_id = c.id
                   where uf.user_id = $1
                   group by c.category_name
                   order by c.category_name`,
          [user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getBasketData({ user_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select u.name, u.surname, u.patronymic, u.address, u.phone, u.postal_code, 
          coalesce(sum(i.price * oi.count),0)::int  total, 
          sum(oi.count)::int  total_count,
          json_agg(DISTINCT 
            jsonb_build_object('id', io.id, 'item_id', i.id, 'order_id', o.id, 'creation_date', o.creation_date, 
            'title', i.title, 'image_list', io.photos, 'count', count, 'option_name', io.name, 'price', price,
            'select_name', i.select_name, 'stock', io.stock,'sale_count', sale_count, 'sale_price', sale_price))  favorites
          from users u 
          left join orders o on u.id = o.user_id
          left join order_items oi on oi.order_id = o.id
          left join item_options io on oi.item_option_id = io.id
          left join items i on io.item_id = i.id
          where u.id = $1 and status='basket' 
          group by u.id
          limit 1`,
          [user_id]
        )
        .then(async (data) => {
          if (!data?.[0]) return rej(new Error(data));

          const basketData = data[0];

          if (!basketData) return rej("No basket");

          if (!basketData.favorites[0]?.id) basketData.favorites = [];

          let sale_total = 0;

          for (let i in basketData.favorites) {
            const item_id = basketData.favorites[i].item_id;

            const count_items_total = basketData.favorites?.reduce(
              (prev, cur, i) => {
                if (cur.item_id === item_id) return prev + cur.count;
                else return prev;
              },
              0
            );

            basketData.favorites[i].count_items_total = count_items_total;

            basketData.favorites[i].is_sale =
              basketData.favorites[i].sale_count &&
              count_items_total >= basketData.favorites[i].sale_count;

            if (basketData.favorites[i].is_sale)
              sale_total +=
                basketData.favorites[i].sale_price *
                basketData.favorites[i].count;
            else
              sale_total +=
                basketData.favorites[i].price * basketData.favorites[i].count;
          }

          basketData.sale_total = sale_total;
          return res(data[0]);
        })
        .catch((error) => {
          console.log(error);
          rej(new MySqlError(error));
        });
    });
  }
}

module.exports = new BasketsService();
