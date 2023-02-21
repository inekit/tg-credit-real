const { getAll: gAllFromDB } = require("../services/items.service");

function get(ctx) {
  return (req, res, next) => {
    gAllFromDB(Object.assign(req.query), ctx)
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

module.exports = {
  get,
};
