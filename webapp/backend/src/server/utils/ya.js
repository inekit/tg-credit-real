const axios = require("axios");
require("dotenv").config();

class Ya {
  constructor({ test_mode, access_token }) {
    this.api_addr = test_mode
      ? "https://b2b.taxi.tst.yandex.net"
      : "https://b2b-authproxy.taxi.yandex.net";
    this.access_token = access_token;
  }

  getPrice({ client_price, address, total_weight }) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.api_addr}/api/b2b/platform/pricing-calculator`,
          {
            client_price: client_price ?? 0,
            destination: { address },
            payment_method: "already_paid",
            source: { address: "Нижний Новгород" }, //Нижний Новгород улица Краснодонцев 23
            tariff: "self_pickup",
            total_assessed_price: client_price ?? 0,
            total_weight,
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
  getTime({ address }) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${this.api_addr}/api/b2b/platform/offers/info`,
          {
            full_address: address,
            send_unix: false,
          },
          {
            headers: {
              Authorization: `Bearer ${this.access_token}`,
              "Content-Type": "application/json",
            },
            params: { full_address: address, send_unix: false },
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

module.exports = Ya;
