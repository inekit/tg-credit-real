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
    this.editFavorite = this.editFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }

  addFavorite({ user_id, item_option_id, count }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const orders = await queryRunner.query(
          `select * from orders where user_id = $1 and status='basket' limit 1`,
          [user_id]
        );
        const basket_id = orders[0].id;

        const data = await queryRunner
          .query(
            `insert into order_items (order_id, item_option_id, count) values ($1,$2,$3)
          ON CONFLICT (order_id, item_option_id) DO UPDATE SET count = order_items.count+$3;`,
            [basket_id, item_option_id, count]
          )
          .catch(async (e) => {
            return await queryRunner.query(
              `update order_items set count = $3 where order_id=$1 and item_option_id=$2;`,
              [basket_id, item_option_id, count]
            );
          });

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
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const orders = await queryRunner.query(
          `select * from orders where user_id = $1 and status='basket' limit 1`,
          [user_id]
        );
        const basket_id = orders[0].id;

        let data;
        if (count < 1) {
          data = await queryRunner.query(
            `delete from order_items where order_id=$1 and item_option_id=$2;`,
            [basket_id, item_option_id]
          );
        } else if (count > 100) throw new Error();
        else
          data = await queryRunner.query(
            `update order_items set count = $3 where order_id=$1 and item_option_id=$2;`,
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

  deleteFavorite({ user_id, item_option_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const orders = await queryRunner.query(
          `select * from orders where user_id = $1 and status='basket' limit 1`,
          [user_id]
        );
        const basket_id = orders[0].id;

        console.log(orders, basket_id, user_id, item_option_id);

        const data = await queryRunner.query(
          `delete from order_items where order_id=$1 and item_option_id=$2;`,
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
  }

  getFavorites({ user_id, item_option_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select io.id, o.creation_date, i.title, i.image_list, count, size, material, price from 
          orders o 
          left join order_items oi on oi.order_id = o.id
          left join item_options io on oi.item_option_id = io.id
          left join items i on io.item_id = i.id
          where o.user_id = $1 and o.status='basket' and io.id is not NULL
          and (io.id = $2 or $2 is NULL)  
          order by io.id`,
          [user_id, item_option_id]
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
          `select u.name, u.surname, u.patronymic, u.address, u.phone, sum(io.price*io.count) total 
          from users u 
          left join orders o on u.id = o.user_id
          left join order_items oi on oi.order_id = o.id
          left join item_options io on oi.item_option_id = io.id
          where u.id = $1
          group by u.id,u.name, u.surname, u.patronymic, u.address, u.phone
          limit 1`,
          [user_id]
        )
        .then(async (data) => {
          if (!data?.[0]) rej(new Error(data));
          return res(data[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }
}

module.exports = new BasketsService();
