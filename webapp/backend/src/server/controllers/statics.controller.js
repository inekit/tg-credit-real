const servicePreset = require("../services/crud.service").getService("Static");

function getOne(req, res, next) {
  servicePreset
    .get(req.query.id, 1, 1)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editOne(req, res, next) {
  servicePreset
    .edit({
      order: req.body.order,
      greeting: req.body.greeting,
      id: 1,
    })
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getOne,
  editOne,
};
