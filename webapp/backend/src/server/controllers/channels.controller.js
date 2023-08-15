const service = require("../services/crud.service").getService("Channel", [
  "title",
  "text",
  "description",
]);
const channelsService = require("../services/channels.service");

function getAll(req, res, next) {
  channelsService
    .get(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addOne(req, res, next) {
  const photosBinary = [];
  for (let paramName in req.files) {
    const index = parseInt(paramName.substring(7, 9));
    if (paramName.substring(0, 6) !== "photos") continue;
    photosBinary[index] = req.files[paramName];
  }
  const photos = [];
  for (let paramName in req.body) {
    const index = parseInt(paramName.substring(7, 9));
    if (paramName.substring(0, 6) !== "photos") continue;
    photos[index] = req.body[paramName];
  }

  channelsService
    .add(
      Object.assign(req.body, {
        photos,
        photosBinary,
        previewBinary: req.files?.preview,
      })
    )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

async function editOne(req, res, next) {
  const photosBinary = [];
  for (let paramName in req.files) {
    const index = parseInt(paramName.substring(7, 9));
    if (paramName.substring(0, 6) !== "photos") continue;
    photosBinary[index] = req.files[paramName];
  }
  const photos = [];
  for (let paramName in req.body) {
    const index = parseInt(paramName.substring(7, 9));
    if (paramName.substring(0, 6) !== "photos") continue;
    photos[index] = req.body[paramName];
  }
  channelsService
    .edit(
      Object.assign(req.body, {
        photos,
        photosBinary,
        previewBinary: req.files?.preview,
      })
    )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteOne(req, res, next) {
  service
    .delete(req.body.id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getAll,
  addOne,
  editOne,
  deleteOne,
};
