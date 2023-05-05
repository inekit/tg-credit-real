const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const Cdek = require("../utils/cdek");
const Ya = require("../utils/ya");
const Pochta = require("../utils/pochta");
require("dotenv").config();
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class BasketsService {
  constructor() {
    this.getPrice = this.getPrice.bind(this);
  }

  getPrice({ operator, address, postal_code, count }) {
    return new Promise(async (res, rej) => {
      try {
        if (!address && !postal_code) rej("No addr data");
        if (operator === "CДЭК") {
          const cdek = new Cdek({
            test_mode: false,
            client_id: process.env.CDEK_ID, //"EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI",
            client_secret: process.env.CDEK_SECRET, //"PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG",
          });

          await cdek.auth();
          const result = await cdek.getPrice({
            tariff_code: operator === "CДЭК" ? 136 : 137,
            from_location: { postal_code: "603065" },
            to_location: { postal_code: postal_code?.toString(), address },
            packages: [
              {
                weight: 1000,
                length: 50,
                width: 50,
                height: 50,
              },
            ],
          });

          console.log(result);

          res({
            price: result.total_sum,
            time: result.period_min
              ? `${result.period_min}-${result.period_max}`
              : null,
          });
        } else if (operator === "Я. Доставка") {
          const ya = new Ya({
            test_mode: true,
            access_token:
              "y2_AgAAAAD0Wcn4AAAPeAAAAAACJXtV-u9qs8IzQzWzJ0Cdt9pv-Wh1YS8",
          });
          const result = await ya.getPrice({
            address,
            total_weight: count * 100,
          });
          const time = await ya.getTime({
            address,
          });
          console.log(time);
          res({
            price: parseInt(result.pricing_total),
            time: time?.offers?.[0]
              ? `${time.offers[0].from}-${timeoffers[0].to}`
              : null,
          });
        } else if (operator === "Почта РФ") {
          const pochta = new Pochta({
            test_mode: false,
            access_token: process.env.POCHTA_TOKEN,
            authorization_key: process.env.POCHTA_KEY,
          });
          const result = await pochta.getPrice({
            total_weight: 1000,
            from_index: "603065",
            to_index: postal_code?.toString(),
          });

          console.log(result);

          res({
            time: result["delivery-time"]
              ? `${result["delivery-time"]["min-days"] ?? 0}-${
                  result["delivery-time"]["max-days"]
                }`
              : null,
          });
        }

        rej("wrong operator");
      } catch (error) {
        rej(error);
      }
    });
  }
}

module.exports = new BasketsService();
