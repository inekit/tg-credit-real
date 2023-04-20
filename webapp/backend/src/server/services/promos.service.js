const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
const Robokassa = require("../utils/robokassa");
const moment = require("moment");
class UsersService {
  constructor() {
    this.get = this.get.bind(this);
    this.use = this.use.bind(this);
  }

  get({ code, page = 1, take = 10 }) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;
      const connection = await tOrmCon;
      connection
        .query(
          `SELECT p.*, count(user_id) used_count from promos p left join users_promos up on p.code = up.promo_code
          WHERE code = $1 or $1 is null)
          GROUP BY p.code
          ORDER BY code DESC
          LIMIT $1 OFFSET $2`,
          [take, skip, user_id]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  use({ code }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const {
        code,
        count: maxCount,
        type,
        sum,
      } = (
        await connection
          .query("select * from promos where code = $1 limit 1", [text])
          .catch((e) => {
            console.log(e);
            ctx.replyWithTitle("DB_ERROR");
          })
      )?.[0] ?? {};

      if (!code) return rej(new Error("WRONG_PROMO"));

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        let used = true;

        const count_used = (
          await queryRunner.query(
            "select count(*) count_used from users_promos where promo_code = $1",
            [code]
          )
        )[0].count_used;

        console.log(maxCount, count_used);

        if (maxCount <= count_used) throw new Error("PROMO_USED");

        await queryRunner.query(
          "insert into users_promos (user_id, promo_code, used, use_date) values ($1,$2,$3, now())",
          [ctx.from.id, code, used]
        );

        await queryRunner.commitTransaction();

        res({ code, type, sum });
      } catch (err) {
        console.log(err);
        ctx.replyWithTitle("PROMO_USED");
        rej(err);

        await queryRunner.rollbackTransaction();
      } finally {
        await queryRunner.release();
      }
    });
  }
}

module.exports = new UsersService();
