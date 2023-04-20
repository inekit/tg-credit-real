const servicePreset = require("../services/crud.service").getService("Promo", [
  "code",
  "type",
  "sum",
]);
const promosService = require("../services/promos.service");

function get(req, res, next) {
  promosService
    .get(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function use(req, res, next) {
  promosService
    .use(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function test(req, res, next) {
  promosService
    .use(req.body, true)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function add(req, res, next) {
  const { code, type, sum, count } = req.body;

  servicePreset
    .add({ code, type, sum, count })
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error);
      next(error);
    });
}

function edit(req, res, next) {
  const { code, type, sum, count } = req.body;

  promosService
    .edit({
      code,
      type,
      sum,
      count,
    })
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function drop(req, res, next) {
  servicePreset
    .delete(req.body.code, "code")
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  get,
  use,
  add,
  test,
  edit,
  drop,
};
