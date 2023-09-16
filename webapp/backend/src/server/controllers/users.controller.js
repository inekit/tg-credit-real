const tOrmCon = require("../../db/connection");
const usersService = require("../services/users.service");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

function getUsers(req, res, next) {
  usersService
    .getUsers(req.query.id, req.query.page, req.query.take)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function getProfile(req, res, next) {
  usersService
    .getProfile(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteUser(req, res, next) {
  const id = req.session.passport.user.toString();
  usersService
    .deleteUser(id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editUser(req, res, next) {
  usersService
    .editUser(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getUsers,
  getProfile,
  deleteUser,
  editUser,
};
