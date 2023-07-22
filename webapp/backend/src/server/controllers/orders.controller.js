const ordersService = require("../services/orders.service");

function getAll(ctx) {
  return (req, res, next) => {
    ordersService
      .getAll(req.query, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function addOne(ctx) {
  return (req, res, next) => {
    ordersService
      .add(req.body, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function editOne(ctx) {
  return (req, res, next) => {
    ordersService
      .edit(req.body, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function deleteOne(ctx) {
  return (req, res, next) => {
    ordersService
      .delete(req.body.id, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function editItem(req, res, next) {
  ordersService
    .editItem(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function dropItem(req, res, next) {
  ordersService
    .dropItem(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function canOrder(req, res, next) {
  ordersService
    .canOrder(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getAll,
  addOne,
  editOne,
  deleteOne,
  dropItem,
  editItem,
  canOrder,
};
