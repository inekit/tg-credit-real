const ordersService = require("../services/orders.service");

function getAll(req, res) {
  if (!req.query.id)
    ordersService
      .getAll(req.query.id, req.query.page, req.query.take)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  else getOne(req, res);
}

function getOne(req, res) {
  ordersService
    .getOne(req.query.id, 1, 1)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addOne(req, res) {
  ordersService
    .add(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editOne(req, res) {
  ordersService
    .edit(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteOne(req, res) {
  ordersService
    .delete(req.body.id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getAll,
  getOne,
  addOne,
  editOne,
  deleteOne,
};
