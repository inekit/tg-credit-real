const ordersService = require("../services/orders.service");

function getAll(req, res, next) {
  if (!req.query.id)
    ordersService
      .getAll(req.query)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  else getOne(req, res);
}

function getOne(req, res, next) {
  ordersService
    .getOne(req.query.id, 1, 1)
    .then((data) => res.send(data))
    .catch((error) => next(error));
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
      .edit(req.body)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function deleteOne(req, res, next) {
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
