const tOrmCon = require("../../db/connection");
const usersService = require("../services/users.service");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

function getUsers(req, res) {
  usersService
    .getUsers(req.query.id, req.query.page, req.query.take)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function getProfile(req, res) {
  usersService
    .getProfile(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteUser(req, res) {
  const id = req.session.passport.user.toString();
  usersService
    .deleteUser(id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addUser(req, res) {
  usersService
    .addUser(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editUser(req, res) {
  usersService
    .editUser(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getUsers,
  getProfile,
  deleteUser,
  addUser,
  editUser,
};
