const axios = require("axios");
require("dotenv").config();

class Pochta {
  constructor({ access_token, authorization_key }) {
    this.api_addr = test_mode
      ? "https://otpravka-api.pochta.ru"
      : "https://otpravka-api.pochta.ru";

    this.client_id = client_id;
    this.client_secret = client_secret;
  }

  getPrice({ sum = 0, from_index, to_index, mass = 1000 }) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.api_addr}/1.0/tariff`,
          {
            "declared-value": sum,
            "index-from": from_index,
            "index-to": to_index,
            "mail-category": "SIMPLE",
            "mail-type": "UNDEFINED",
            mass,
          },
          {
            headers: {
              Authorization: `AccessToken ${
                this.access_token ?? "sDBaa9XNfFargSyQ8KIEM40GB_ndPmLu"
              }`,
              "X-User-Authorization": `Basic ${
                this.authorization_key ?? "bG9naW46cGFzc3dvcmQ="
              }`,
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          reject(error);
        });
    });
  }
}

module.exports = Pochta;
