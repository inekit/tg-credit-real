const tOrmCon = require("../../db/connection");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");
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
          WHERE (code = $3 or $3 is null)
          GROUP BY p.code
          ORDER BY code DESC
          LIMIT $1 OFFSET $2`,
          [take, skip, code]
        )
        .then(async (data) => {
          return res(data);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  use({ code, user_id }, test) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const {
        count: maxCount,
        type,
        sum,
      } = (
        await connection
          .query("select * from promos where code = $1 limit 1", [code])
          .catch((e) => {
            console.log(e);
            ctx.replyWithTitle("DB_ERROR");
          })
      )?.[0] ?? {};

      if (!sum) return rej(new Error("WRONG_PROMO"));

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        let used = true;

        const { count_used, count_used_me } =
          (
            await queryRunner.query(
              "select count(*) count_used, count(CASE WHEN user_id=$2 THEN 1 END) count_used_me from users_promos where promo_code = $1",
              [code, user_id]
            )
          )[0] ?? {};

        console.log(maxCount, count_used, count_used_me);

        if (maxCount <= count_used || count_used_me > 0)
          throw new Error("PROMO_USED");

        !test &&
          (await queryRunner.query(
            "insert into users_promos (user_id, promo_code, used, use_date) values ($1,$2,true, now())",
            [user_id, code]
          ));

        await queryRunner.commitTransaction();

        res({ code, type, sum });
      } catch (err) {
        console.log(err);
        rej(err);

        await queryRunner.rollbackTransaction();
      } finally {
        await queryRunner.release();
      }
    });
  }

  edit({ code, count, type, sum }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      try {
        const data = await connection
          .getRepository("Promo")
          .createQueryBuilder()
          .update({
            code,
            count,
            type,
            sum,
          })
          .where({
            code,
          })
          .returning("*")
          .execute();

        res(data);
      } catch (error) {
        console.log(error);
        rej(new MySqlError(error));
      }
    });
  }
}

module.exports = new UsersService();
