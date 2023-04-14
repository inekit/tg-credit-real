const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
const moment = require("moment");
class UsersService {
  constructor() {
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  getOne({ id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `SELECT o.*,count(oi.item_option_id) count_items,
          json_agg(json_build_object(
            'title', i.title,'count',oi.count, 'id', io.id, 'size', io.size, 'material', io.material, 'price', io.price,'mainside_id' oi.mainside_id
            )) items
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
          if (!postData?.[0]) rej(new NotFoundError());

          return res(postData?.[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getAll({ id, page = 1, take = 10, user_id }) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOne({ id })
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;

      const connection = await tOrmCon;

      connection
        .query(
          `SELECT o.*,oi.count, io.size, io.material, io.price, i.title from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id 
          where (user_id = $3 or $3 is NULL)  
          and status <> 'basket'
          GROUP BY o.id, oi.count, io.size, io.material, io.price, i.title
          ORDER BY id DESC
          LIMIT $1 OFFSET $2`,
          [take, skip, user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
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
      total,
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
        const orders = await queryRunner.query(
          `select o.*, count(oi.item_option_id) count_items,
          json_agg(json_build_object('title', i.title,'count',oi.count, 'id', io.id, 'size', io.size, 'material', io.material, 'price', io.price)) items 
          from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id 
          where user_id = $1 and status='basket' 
          group by o.id
          limit 1`,
          [user_id]
        );
        if (orders[0].count_items < 1) throw new Error("No items");

        const basket_id = orders[0].id;

        const data = await queryRunner.manager.getRepository("Order").save({
          user_id,
          total,
          selected_dm,
          selected_po,
          phone,
          address,
          name,
          surname,
          patronymic,
        });

        const { id: order_id } = data;

        await queryRunner.query(
          `update order_items set order_id=$1 where order_id = $2`,
          [order_id, basket_id]
        );

        await queryRunner.query(
          `update users set address=$2,phone=$3,name=$4,surname=$5,patronymic=$6 where id = $1`,
          [user_id, address, phone, name, surname, patronymic]
        );

        await queryRunner.commitTransaction();
        global.io.emit("UPDATE_ORDERS");
        res(data);

        const orderStr = orders[0].items
          ?.map((el) => `📦 ${el.title} - ${el.count} (шт.)`)
          ?.join("/n");

        ctx.telegram
          .sendMessage(
            user_id,
            ctx.getTitle("ORDER_INFO_TITLE", [
              order_id,
              moment(orders[0].creation_date).format("DD.MM.YYYY"),
              orderStr,
              "Новый",
              selected_po,
              selected_dm,
              total,
            ]),
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Оплатить",
                      callback_data: "pay-" + order_id,
                    },
                  ],
                ],
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
