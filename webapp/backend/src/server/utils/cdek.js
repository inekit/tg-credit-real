const axios = require("axios");
require("dotenv").config();

class Cdek {
  constructor({ mode, client_id, client_secret }) {
    this.api_addr =
      mode === "TEST" ? "https://api.edu.cdek.ru" : "https://api.cdek.ru";

    this.client_id = client_id;
    this.client_secret = client_secret;
  }

  async auth() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.api_addr}/v2/oauth/token`, null, {
          params: {
            grant_type: "client_credentials",
            client_id: this.client_id,
            client_secret: this.client_secret,
          },
        })
        .then((response) => {
          this.access_token = response.data?.access_token;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getPrice(tariff_code, from_location, to_location, packages) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.api_addr}/v2/calculator/tariff`,
          {
            tariff_code,
            from_location,
            to_location,
            packages,
          },
          {
            headers: {
              Authorization: `Bearer ${this.access_token}`,
              "Content-Type": "application/json",
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

module.exports = Cdek;
