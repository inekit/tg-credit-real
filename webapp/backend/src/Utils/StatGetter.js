const axios = require("axios").create({
  baseUrl: "https://api.tgstat.ru/channels/stat",
});
require("dotenv").config();

class StatGetter {
  constructor(channelId) {
    this.channelId = channelId;
  }
  get() {
    return new Promise((res, rej) => {
      axios
        .get("https://api.tgstat.ru/channels/stat", {
          params: {
            token: process.env.TGSTAT_TOKEN,
            channelId: this.channelId,
          },
        })
        .then((response) => {
          res(response.data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}

module.exports = StatGetter;
