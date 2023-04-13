const tOrmCon = require("../../db/connection");
const servicePreset = require("../services/crud.service").getService("Tag", [
  "name",
  "description",
]);

function getAll(req, res, next) {
  console.log(req.query.category);
  if (!req.query.id)
    servicePreset
      .get(req.query.id, req.query.page, req.query.take)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  else getOne(req, res);
}

function getOne(req, res, next) {
  servicePreset
    .get(req.query.id, 1, 1)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addOne(req, res, next) {
  const { name, description } = req.body;

  servicePreset
    .add({ name, description })
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editOne(req, res, next) {
  servicePreset
    .edit({
      name: req.body.name,
      description: req.body.description,
      id: req.body.id,
    })
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteOne(req, res, next) {
  servicePreset
    .delete(req.body.name, "name")
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
