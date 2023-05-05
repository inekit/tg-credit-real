const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
require("dotenv").config();

const Robokassa = require("../utils/robokassa");
const moment = require("moment");
class UsersService {
  constructor() {
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.dropItem = this.dropItem.bind(this);
  }

  getOne({ id }, ctx) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `SELECT o.*,count(oi.item_option_id) count_items,
          json_agg(json_build_object(
            'title', i.title,'count',oi.count, 'id', io.id, 'item_id', i.id, 'option_name', io.name, 'price', i.price)) items
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id  
          where o.id = $1
          group by o.id
          limit 1`,
          [id]
        )
        .then(async (postData) => {
          console.log(postData);
          if (!postData?.[0]) rej(new NotFoundError());

          let order = postData[0];

          order.reciept_photo_link =
            order.reciept_photo_id &&
            (await ctx.telegram
              .getFileLink(order.reciept_photo_id)
              .catch(console.log));

          return res(order);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getAll({ id, page = 1, take = 10, isBasket, user_id }, ctx) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOne({ id }, ctx)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      connection
        .query(
          `SELECT o.*,
          json_agg(DISTINCT jsonb_build_object('title', i.title,'count',oi.count, 
           'option_id', io.id, 'option_name', io.name, 'price', i.price)) items 
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id 
          where (user_id = $3 or $3 is NULL)  
          ${isBasket ? "" : `and status <> 'basket'`}
          GROUP BY o.id
          ORDER BY status, o.id DESC, io.id DESC
          LIMIT $1 OFFSET $2`,
          [take, skip, user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => {
          console.log(error);
          rej(new MySqlError(error));
        });
    });
  }

  add(
    {
      user_id,
      address,
      selected_dm,
      selected_po,
      phone,
      name,
      surname,
      patronymic,
      postal_code,
      promo_code,
      delivery_price,
    },
    ctx
  ) {
    return new Promise(async (res, rej) => {
      if (!user_id) return rej(new NoInputDataError({ user_id }));

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const basket = (
          await queryRunner.query(
            `select o.*, count(oi.item_option_id) count_items,
          json_agg(json_build_object('title', i.title,'count',oi.count, 'id', io.id, 'price', i.price,'stock', io.stock)) items 
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id 
          where user_id = $1 and status='basket' 
          group by o.id
          limit 1`,
            [user_id]
          )
        )[0];
        if (basket.count_items < 1) throw new Error("No items");

        const basket_id = basket.id;

        for (let item of basket.items) {
          if (item.stock < item.count) throw new Error("No stock");

          await queryRunner.query(
            `update item_options set stock = stock - $1 where id = $2`,
            [item.count, item.id]
          );
        }

        let type,
          sum = 0;

        if (promo_code) {
          const promoObj =
            (
              await connection
                .query("select * from promos where code = $1 limit 1", [
                  promo_code,
                ])
                .catch((e) => {
                  console.log(e);
                  ctx.replyWithTitle("DB_ERROR");
                })
            )?.[0] ?? {};

          sum = promoObj.sum;
          type = promoObj.type;
          const maxCount = promoObj.count;

          if (!sum) return rej(new Error("WRONG_PROMO"));

          const count_used = (
            await queryRunner.query(
              "select count(*) count_used from users_promos where promo_code = $1",
              [promo_code]
            )
          )[0].count_used;

          console.log(maxCount, count_used);

          if (maxCount <= count_used) throw new Error("PROMO_USED");

          await queryRunner.query(
            "insert into users_promos (user_id, promo_code, used, use_date) values ($1,$2,true, now())",
            [user_id, promo_code]
          );
        }

        let total = basket.items.reduce(
          (prev, cur) => prev + cur.price * cur.count,
          0
        );
        total =
          type === "money"
            ? Math.max(total - sum, 0)
            : ((+(100 - sum) * total) / 100).toFixed(0);

        if (total < 0) throw new Error("PROMO_TO_LARGE");
        if (delivery_price < 0) throw new Error("DELIVERY_WRONG");

        total = +total + +delivery_price;

        total = total + (basket.individual_price ?? 0);

        const data = await queryRunner.manager.getRepository("Order").save({
          user_id,
          total,
          selected_dm,
          selected_po,
          phone,
          address,
          name,
          surname,
          postal_code,
          patronymic,
        });

        const { id: order_id } = data;

        await queryRunner.query(
          `update order_items set order_id=$1 where order_id = $2`,
          [order_id, basket_id]
        );

        await queryRunner.query(
          `update users set address=$2,phone=$3,name=$4,surname=$5,patronymic=$6,postal_code=$7 where id = $1`,
          [user_id, address, phone, name, surname, patronymic, postal_code]
        );

        await queryRunner.commitTransaction();
        global.io.emit("UPDATE_ORDERS");
        res(data);

        const orderStr =
          basket.items
            ?.map((el) => (el.id ? `📦 ${el.title} - ${el.count} (шт.)` : ""))
            ?.join("\n") ?? "";

        const robokassa = new Robokassa({
          MerchantLogin: process.env.ROBO_MERCHANT_LOGIN,
          Password: process.env.ROBO_PASSWORD,
        });

        const link = await robokassa
          .getInvoiceLink({
            OutSum: total,
            InvId: order_id,
            Description: basket.items
              ?.map((el) => `${el.title} - ${el.count} (шт.)`)
              ?.join("; ")
              .substr(0, 100),
          })
          .catch(console.log);

        ctx.telegram
          .sendMessage(
            user_id,
            ctx.getTitle("ORDER_INFO_TITLE", [
              order_id,
              moment(basket.creation_date).format("DD.MM.YYYY"),
              orderStr,
              "Новый",
              selected_dm,
              total,
            ]),
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard:
                  selected_po === "Перевод"
                    ? [
                        [
                          {
                            text: "Оплатить",
                            callback_data: "pay_" + order_id,
                          },
                        ],
                      ]
                    : [],
              },
            }
          )
          .catch(console.log);
      } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }

  delete(id) {
    return new Promise((res, rej) => {
      if (!id) return rej(new NoInputDataError({ id: id }));

      tOrmCon.then((connection) => {
        connection
          .getRepository("Order")
          .delete({ id })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  editItem({ order_id, item_option_id, count }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        let data;
        if (count < 1) {
          data = await queryRunner.query(
            `delete from order_items where order_id=$1 and item_option_id=$2`,
            [order_id, item_option_id]
          );
        } else if (count > 100) throw new Error();
        else
          data = await queryRunner.query(
            `update order_items set count = $3 where order_id=$1 and item_option_id=$2`,
            [order_id, item_option_id, count]
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

  dropItem({ item_option_id, order_id }) {
    return new Promise((res, rej) => {
      if (!item_option_id || !order_id)
        return rej(new NoInputDataError({ item_option_id, order_id }));

      tOrmCon.then((connection) => {
        connection
          .query(
            `delete from order_items 
        where order_id=$1 and item_option_id=$2`,
            [order_id, item_option_id]
          )
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  edit(order, ctx) {
    return new Promise((res, rej) => {
      if (!order.id) return rej(new NoInputDataError({ id: order.id }));

      tOrmCon.then((connection) => {
        connection
          .query("update orders set status = $1 where id = $2 returning *", [
            order.status,
            order.id,
          ])
          .then((data) => {
            const orderObj = data[0][0];
            ctx.telegram
              .sendMessage(
                orderObj.user_id,
                ctx.getTitle("ORDER_NEW_STATUS_TITLE", [
                  orderObj.id,
                  moment(orderObj.creation_date).format("DD.MM.YYYY"),
                  orderObj.status,
                ]),
                {
                  parse_mode: "HTML",
                }
              )
              .catch(console.log);

            res(data);
          })
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }
}

module.exports = new UsersService();
