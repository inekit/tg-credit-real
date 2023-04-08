const basketsService = require("../services/baskets.service");
function getFavorites(req, res, next) {
  basketsService
    .getFavorites(req.query, ctx)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addFavorite(req, res, next) {
  basketsService
    .addFavorite(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function editFavorite(req, res, next) {
  basketsService
    .editFavorite(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteFavorite(req, res, next) {
  basketsService
    .deleteFavorite(req.body)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getFavorites,
  deleteFavorite,
  addFavorite,
  editFavorite,
};
