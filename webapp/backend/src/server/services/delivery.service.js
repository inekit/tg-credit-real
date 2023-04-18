const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const Cdek = require("../utils/cdek");
const Ya = require("../utils/ya");

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
        if (operator === "сдек") {
          const cdek = new Cdek({
            test_mode: true,
            client_id: "EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI",
            client_secret: "PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG",
          });

          await cdek.auth();
          const result = await cdek.getPrice({
            tariff_code: 136,
            from_location: { postal_code: "603065" },
            to_location: { postal_code, address },
            packages: [
              {
                weight: count * 100,
                length: 50,
                width: 50,
                height: count * 10,
              },
            ],
          });

          console.log(result);

          res(result);
        } else if (operator === "Яндекс") {
          const ya = new Ya({
            test_mode: true,
            access_token:
              "y2_AgAAAAD0Wcn4AAAPeAAAAAACJXtV-u9qs8IzQzWzJ0Cdt9pv-Wh1YS8",
          });
          const result = await ya.getPrice({
            address,
            total_weight: count * 100,
          });
          console.log(result);
          res(result);
        }

        rej("wrong operator");
      } catch (error) {
        rej(error);
      }
    });
  }
}

module.exports = new BasketsService();
