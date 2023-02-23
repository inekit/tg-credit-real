const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

class UsersService {
  constructor() {
    this.getFilePath = this.getFilePath.bind(this);
  }

  async getFilePath(city_id, object_id, item_id) {
    const folderPath = `${process.env.STATIC_FOLDER}/${city_id}/${object_id}`;

    const files = (
      await fs.promises
        .readdir(folderPath, {
          withFileTypes: true,
        })
        .catch((e) => {})
    )
      ?.filter((item) => !item.isDirectory())
      ?.map((item) => item.name);

    return folderPath + "/" + files?.[item_id];
  }
}

module.exports = new UsersService();
