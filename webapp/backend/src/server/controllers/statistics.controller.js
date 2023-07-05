const statisticsService = require("../services/statistics.service");
const { get: getStatistics } = statisticsService;

function get(req, res, next) {
  getStatistics(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}
module.exports = {
  get,
};
