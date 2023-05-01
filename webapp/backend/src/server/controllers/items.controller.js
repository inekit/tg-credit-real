const service = require("../services/crud.service").getService("Item", [
  "title",
  "text",
  "description",
]);
const itemsService = require("../services/items.service");
const { getPosts, add, editPost } = itemsService;

function getAll(req, res, next) {
  getPosts(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addOne(req, res, next) {
  add(
    Object.assign(req.body, {
      images: req.body?.["images[]"],
      previewsBinary: req.files?.["images[]"],
    })
  )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

async function editOne(req, res, next) {
  editPost(
    Object.assign(req.body, {
      images: req.body?.["images[]"],
      previewsBinary: req.files?.["images[]"],
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
