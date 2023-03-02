const {
  getAll: gAllFromDB,
  sendFiles,
  getFavorites: getFavoritesFromDB,
} = require("../services/items.service");

function getItems(ctx) {
  return (req, res, next) => {
    gAllFromDB(Object.assign(req.query), ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function getFavorites(ctx) {
  return (req, res, next) => {
    getFavoritesFromDB(req.query, ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function getFiles(ctx) {
  return (req, res, next) => {
    sendFiles(Object.assign(req.query), ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

module.exports = {
  getItems,
  getFiles,
  getFavorites,
};
