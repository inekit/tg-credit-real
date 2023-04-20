const ordersService = require("../services/orders.service");
const servicePreset = require("../services/crud.service").getService(
  "OrderItem",
  ["item_option_id", "order_id", "mainside_id", "count"]
);

function getAll(req, res, next) {
  ordersService
    .getAll(req.query)
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
      .edit(req.body, ctx)
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

function editItem(req, res, next) {
  servicePreset
    .edit(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function dropItem(req, res, next) {
  ordersService
    .dropItem(req.body)
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
};
