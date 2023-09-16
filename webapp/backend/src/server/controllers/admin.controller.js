const tOrmCon = require("../../db/connection");
const adminsService = require("../services/admins.service");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

function getId(req, res, next) {
  myId = req.session.passport.user.toString();

  tOrmCon.then((connection) => {
    connection
      .getRepository("Admin")
      .find({ where: [{ id: myId }], select: ["id", "login"] })
      .then((userData) => res.status(200).send(userData?.[0]))
      .catch((error) => next(new MySqlError(error)));
  });
}

function getAll(req, res) {
  adminsService
    .get(req.query.id, req.query.page, req.query.take)
    .then((userData) => res.status(200).send(userData))
    .catch((err) =>
      res.status(404).send({ error: "Не удается найти пользователя" })
    );
}

function selfDelete(req, res) {
  const id = req.session.passport.user.toString();
  adminsService
    .delete(id)
    .then((userData) => res.status(200).send({ status: true }))
    .catch((err) =>
      res
        .status(304)
        .send({ status: false, error: "Не удается удалить пользователя" })
    );
}

function adminDelete(req, res) {
  const id = req.body.id;
  adminsService
    .delete(id)
    .then((userData) => res.status(200).send({ status: true }))
    .catch((err) => res.status(304).send({ status: false, error: err }));
}

module.exports = {
  getId,
  getAll,
  selfDelete,
  adminDelete,
};
