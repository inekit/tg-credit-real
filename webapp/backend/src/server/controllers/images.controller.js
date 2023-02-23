const { getFilePath } = require("../services/statics.service");
require("dotenv").config();
const path = require("path");

async function get(req, res, next) {
  const { city_id, object_id, img_id } = req.params;

  const fileName = await getFilePath(city_id, object_id, img_id);

  if (!fileName) return next();

  var options = {
    root: "/",
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      //console.log(err);
      next();
    }
  });
}

module.exports = {
  get,
};
