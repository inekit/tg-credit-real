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

  async getFilePath(object_id, item_id) {
    const files = (
      await fs.promises
        .readdir(`${process.env.STATIC_FOLDER}/${object_id}`, {
          withFileTypes: true,
        })
        .catch((e) => {})
    )
      ?.filter((item) => !item.isDirectory())
      ?.map((item) => item.name);

    return files?.[item_id];
  }
}

module.exports = new UsersService();
