const deliveryService = require("../services/delivery.service");

function get(req, res, next) {
  deliveryService
    .getPrice(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  get,
};
