const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
require("dotenv").config();
const sendOrder = require("../../Utils/sendOrder");
const Robokassa = require("../utils/robokassa");
const googleDocs = require("../../Utils/googleDocs");
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
          `SELECT o.*,count(oi.item_option_id) count_items, u.username,p.type promo_type, p.sum promo_sum,
          json_agg(json_build_object(
            'title', i.title,'count',oi.count, 'id', io.id, 'item_id', i.id, 'option_name', io.name, 'price', i.price)) items
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id  
          left join users u on o.user_id = u.id
          left join promos p on p.code = o.promo_code
          where o.id = $1
          group by o.id, u.username, p.code
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

  getAll({ id, page = 1, take = 10, isBasket, user_id, searchQuery }, ctx) {
    return new Promise(async (res, rej) => {
      if (id) {
        return this.getOne({ id }, ctx)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      searchQuery = searchQuery ? `%${searchQuery}%` : null;

      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      connection
        .query(
          `SELECT o.*,
          json_agg(DISTINCT jsonb_build_object('title', i.title,'count',oi.count, 
           'option_id', io.id, 'option_name', io.name, 'price', i.price)) items,
           o.surname||' '|| o.name || ' ' || o.patronymic as fio,
          count (CASE WHEN uo.status <> 'basket' then 1 ELSE NULL END) orders_count,
          u.username
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id 
          left join users u on o.user_id = u.id
          left join orders uo on u.id = uo.user_id
          where (o.user_id = $3 or $3 is NULL)  
          and (lower(username) like lower($4) 
            or lower(o.id::varchar) like lower($4) 
            or lower(o.patronymic) like lower($4) 
            or lower(o.name) like lower($4) 
            or lower(o.surname) like lower($4) 
            or $4 is NULL
          )
          ${isBasket ? "" : `and o.status <> 'basket'`}
          GROUP BY o.id,u.username, uo.status
          ORDER BY o.id DESC
          LIMIT $1 OFFSET $2`,
          [take, skip, user_id, searchQuery]
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
      comment,
    },
    ctx
  ) {
    return new Promise(async (res, rej) => {
      if (!user_id) return rej(new NoInputDataError({ user_id }));

      console.log("order_");

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const basket = (
          await queryRunner.query(
            `select o.*, count(oi.item_option_id) count_items,
          json_agg(json_build_object('title', i.title,'count',oi.count, 'id', io.id, 'price', i.price,'stock', io.stock,
          'sale_count', sale_count, 'sale_price', sale_price,'table_name',table_name, 'option_name',io.name)) items 
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

        const limits = await queryRunner.query(
          `select 
            COUNT(CASE WHEN creation_date >= date_trunc('minute',now() - interval '10 minute') THEN 1 END) count_o_m,
            COUNT(CASE WHEN creation_date >= date_trunc('day',now() - interval '1 day') THEN 1 END) count_o_d,
            EXTRACT(MINUTE FROM now()-MAX(creation_date)) AS last_o_m_ago
           from orders where user_id = $1`,
          [user_id]
        );

        console.log(limits);

        const { count_o_m, count_o_d, last_o_m_ago } = limits?.[0] ?? {};

        console.log(count_o_d, count_o_m, last_o_m_ago);

        if (count_o_d >= 10) {
          throw new Error("Too much orders a day");
        } else if (count_o_m >= 2)
          throw new Error("Too much orders for 10 minutes");

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
          const is_permanent = promoObj.is_permanent;

          if (!sum) return rej(new Error("WRONG_PROMO"));

          const count_used = (
            await queryRunner.query(
              "select count(*) count_used from users_promos where promo_code = $1",
              [promo_code]
            )
          )[0].count_used;

          console.log(maxCount, count_used);

          if (maxCount <= count_used) throw new Error("PROMO_USED");

          await connection
            .query(
              "insert into users_promos (user_id, promo_code, used, use_date) values ($1,$2,true, now())",
              [user_id, promo_code]
            )
            .catch((e) => {
              console.log(123);
              if (is_permanent) return;
              throw new Error("PROMO_USED");
            });
        }

        let total = 0;

        for (let i in basket.items) {
          const item_id = basket.items[i].item_id;

          const count_items_total = basket.items?.reduce((prev, cur, i) => {
            if (cur.item_id === item_id) return prev + cur.count;
            else return prev;
          }, 0);

          basket.items[i].count_items_total = count_items_total;

          basket.items[i].is_sale =
            basket.items[i].sale_count &&
            count_items_total >= basket.items[i].sale_count;

          if (basket.items[i].is_sale)
            total += basket.items[i].sale_price * basket.items[i].count;
          else total += basket.items[i].price * basket.items[i].count;
        }

        total =
          type === "money"
            ? Math.max(total - sum, 0)
            : ((+(100 - sum) * total) / 100).toFixed(0);

        total = +total;

        if (total < 0) throw new Error("PROMO_TO_LARGE");

        const getDeliveryPrice = () => {
          switch (selected_dm) {
            case "Метро":
              return total >= 5000 ? 0 : 200;
            case "До станции метро":
              return total >= 5000 ? 0 : 200;
            case "Внутри МКАД":
              return total >= 5000 ? 0 : 350;
            case "МО за МКАД":
              return total >= 7000 ? 0 : null;
            case "Почта России":
              return 400;
            case "Яндекс Доставка":
              return 350;
            case "Яндекс Доставка до пункта выдачи":
              return 350;
          }
        };

        let delivery_price = getDeliveryPrice();

        total = +total + +delivery_price;

        total = total + (basket.individual_price ?? 0);

        console.log(delivery_price, total);

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
          promo_code,
          patronymic,
          delivery_price,
          comment,
        });

        const { id: order_id, status } = data;

        await queryRunner.query(
          `update order_items set order_id=$1 where order_id = $2`,
          [order_id, basket_id]
        );

        const username = (
          await queryRunner.query(
            `update users set address=$2,phone=$3,name=$4,surname=$5,patronymic=$6,postal_code=$7 where id = $1 returning username`,
            [user_id, address, phone, name, surname, patronymic, postal_code]
          )
        )?.[0]?.[0]?.username;

        googleDocs.addOrder({
          order_id,
          user_id,
          total,
          selected_dm,
          selected_po,
          phone,
          address,
          name,
          surname,
          postal_code,
          promo_code,
          patronymic,
          delivery_price,
          comment,
          items: basket.items,
        });

        const orderStr =
          basket.items
            ?.map((el) =>
              el.id
                ? `📦 ${el.title} ${el.option_name} - ${el.count} (шт.)`
                : ""
            )
            ?.join("\n") ?? "";

        /*const robokassa = new Robokassa({
          MerchantLogin: process.env.ROBO_MERCHANT_LOGIN,
          Password: process.env.ROBO_PASSWORD,
        });*/

        /*const link = await robokassa
          .getInvoiceLink({
            OutSum: total,
            InvId: order_id,
            Description: basket.items
              ?.map((el) => `${el.title} - ${el.count} (шт.)`)
              ?.join("; ")
              .substr(0, 100),
          })
          .catch(console.log);*/

        const client_message = await ctx.telegram
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
                        [
                          {
                            text: "Отменить",
                            callback_data: "cancel_" + order_id,
                          },
                        ],
                      ]
                    : [],
              },
            }
          )
          .catch(console.log);

        await queryRunner
          .query("update orders set client_message_id = $1 where id = $2", [
            client_message?.message_id,
            order_id,
          ])
          .catch((e) => console.log(e));

        await queryRunner.commitTransaction();
        global.io.emit("UPDATE_ORDERS");
        res(data);

        if (count_o_d >= 9) {
          await ctx.telegram
            .sendMessage(user_id, ctx.getTitle("TOO_MUCH_ORDERS_DAY", []))
            .catch(console.log);
        } else if (count_o_m >= 1) {
          await ctx.telegram
            .sendMessage(user_id, ctx.getTitle("TOO_MUCH_ORDERS_MINUTES", []))
            .catch(console.log);
        }

        await sendOrder(
          ctx,
          {
            id: order_id,
            user_id,
            username,
            total,
            selected_dm,
            selected_po,
            phone,
            address,
            name,
            surname,
            postal_code,
            promo_code,
            patronymic,
            delivery_price,
            comment,
          },
          basket.items,
          false
        );
      } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }

  delete(id, ctx) {
    return new Promise(async (res, rej) => {
      if (!id) return rej(new NoInputDataError({ id: id }));

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const data = (
          await queryRunner.query(
            "delete from orders where id = $1 returning *",
            [id]
          )
        )[0][0];

        await googleDocs.dropOrder(+id);

        await ctx.telegram
          .deleteMessage(process.env.ADMIN_ID, data.last_message_id)
          .catch((e) => console.log(e));

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

  canOrder({ user_id }) {
    return new Promise((res, rej) => {
      if (!user_id) return rej(new NoInputDataError({ user_id }));

      tOrmCon.then((connection) => {
        connection
          .query(
            `select 
            COUNT(CASE WHEN creation_date >= date_trunc('minute',now() - interval '10 minute') THEN 1 END) count_o_m,
            COUNT(CASE WHEN creation_date >= date_trunc('day',now() - interval '1 day') THEN 1 END) count_o_d,
            EXTRACT(MINUTE FROM now()-MAX(creation_date)) AS last_o_m_ago
           from orders where user_id = $1`,
            [user_id]
          )
          .then((data) => {
            const { count_o_m, count_o_d, last_o_m_ago } = data?.[0] ?? {};

            if (count_o_d >= 10) {
              res({ can_order: false, reason: "day" });
            } else if (count_o_m >= 2)
              res({ can_order: false, reason: "minutes" });
            res({ can_order: true });
          })
          .catch((error) => rej(new MySqlError(error)));
      });
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

            if (order.status === "Отменен") {
              googleDocs.dropOrder(+order.id);
            }

            /*sendOrder(
              ctx,
              Object.assign(orderObj),
              items,
              true,
              is_photo
            );*/

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
