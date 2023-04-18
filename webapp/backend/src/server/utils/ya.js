const axios = require("axios");
require("dotenv").config();

class Ya {
  constructor({ access_token }) {
    this.access_token = access_token;
  }

  getPrice({ client_price, address, total_weight }) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `b2b-authproxy.taxi.yandex.net/api/b2b/platform/pricing-calculator`,
          {
            client_price: client_price ?? 0,
            destination: { address },
            payment_method: "already_paid",
            source: { address },
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
}

module.exports = Ya;
