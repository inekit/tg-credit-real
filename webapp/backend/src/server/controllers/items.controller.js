const { getAll: gAllFromDB, sendFiles } = require("../services/items.service");

function get(ctx) {
  return (req, res, next) => {
    gAllFromDB(Object.assign(req.query), ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function getFiles(ctx) {
  return (req, res, next) => {
    console.log(13224);

    sendFiles(Object.assign(req.query), ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

module.exports = {
  get,
  getFiles,
};
