const { getFilePath } = require("../services/statics.service");
require("dotenv").config();
const path = require("path");

async function get(req, res, next) {
  const { object_id, img_id } = req.params;

  const fileName = await getFilePath(object_id, img_id);

  if (!fileName) return next();

  var options = {
    root: path.join(process.env.STATIC_FOLDER, object_id),
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      //console.log(err);
      next(err);
    }
  });
}

module.exports = {
  get,
};
