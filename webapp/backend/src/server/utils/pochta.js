const axios = require("axios");
require("dotenv").config();

class Pochta {
  constructor({ access_token, authorization_key, test_mode }) {
    this.api_addr = test_mode
      ? "https://test.otpravka-api.pochta.ru"
      : "https://otpravka-api.pochta.ru";

    this.access_token = access_token;
    this.authorization_key = authorization_key;
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
            "mail-category": "ORDINARY",
            "mail-type": "ONLINE_PARCEL",
            mass,

            "completeness-checking": false,
            "contents-checking": false,
            courier: false,
            "declared-value": 0,
            dimension: {
              height: 10,
              length: 30,
              width: 30,
            },

            "dimension-type": "S",
            "entries-type": "GIFT",
            fragile: false,
            inventory: true,
            "mail-direct": 0,
            //"notice-payment-method": "CASHLESS",
            //"payment-method": "CASHLESS",
            "sms-notice-recipient": 0,
            "transport-type": "SURFACE",
            vsd: true,
            "with-electronic-notice": true,
            "with-order-of-notice": true,
            "with-simple-notice": true,
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
          console.log(error);
          reject(error);
        });
    });
  }
}

module.exports = Pochta;
