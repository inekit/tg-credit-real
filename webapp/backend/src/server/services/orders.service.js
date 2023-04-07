const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

io.on("connection", (socket) => {
  console.log("a user connected");
});

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
          `SELECT o.*,oi.count, io.size, io.material, io.price, i.title from orders o 
          left join order_items oi on o.id = oi.order_id  
          left join item_options io on oi.item_option_id = io.id  
          left join items i on io.item_id = i.id  
          where o.id = $1 limit 1`,
          [id]
        )
        .then(async (postData) => {
          if (!postData?.[0]) rej(new NotFoundError());

          return res(postData?.[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getAll({ id, page = 1, take = 10 }) {
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
          ORDER BY id DESC
          LIMIT $1 OFFSET $2`,
          [take, skip]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  add(order) {
    return new Promise((res, rej) => {
      if (!order.id) return rej(new NoInputDataError({ id: order.id }));

      connection
        .getRepository("Order")
        .save(order)
        .then((data) => {
          global.io.emit("UPDATE_ORDERS");
          res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
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

  edit(order) {
    return new Promise((res, rej) => {
      if (!order.id) return rej(new NoInputDataError({ id: order.id }));

      tOrmCon.then((connection) => {
        connection
          .getRepository("Order")
          .update({ id }, order)
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }
}

module.exports = new UsersService();
