const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class AdminsService {
  constructor() {
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  get(id, page, take) {
    return new Promise((res, rej) => {
      const filteres = {};
      if (id) filteres.toCode = id;

      take = take || 10;
      page = page || 1;
      let skip = (page - 1) * take;
      console.log(skip, take);

      tOrmCon.then((connection) => {
        connection
          .getRepository("Admin")
          .find({ where: filteres, skip, take })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  add(user) {
    return new Promise((res, rej) => {
      if (!checkInputData(user, "password", "login"))
        return rej(
          new NoInputDataError({ password: user?.password, login: user?.login })
        );

      tOrmCon.then((connection) => {
        connection
          .getRepository("Admin")
          .save(user)
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  delete(id) {
    return new Promise((res, rej) => {
      if (!id) return rej(new NoInputDataError({ id: id }));

      const filteres = {};
      if (id) filteres.toCode = id;

      tOrmCon.then((connection) => {
        connection
          .getRepository("Admin")
          .delete({ id })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  edit(user) {
    return new Promise((res, rej) => {
      if (!user.id) return rej(new NoInputDataError({ id: user.id }));

      tOrmCon.then((connection) => {
        connection
          .getRepository("Admin")
          .update({ id: user.id }, { id: user.id, ban: user.ban })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }
}

module.exports = new AdminsService();
