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
      gitHubLink: req.body.gitHubLink,
      linkedInLink: req.body.linkedInLink,
      about: req.body.about,
      id: 1,
    })
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getOne,
  editOne,
};
