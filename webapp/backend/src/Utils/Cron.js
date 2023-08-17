const cron = require("node-cron");
const tOrmCon = require("../db/connection");
const StatGetter = require("./StatGetter");

class Cron {
  constructor() {
    cron.schedule("0 2 * * *", () => {
      updateStat();
    });
  }
}

//updateStat();

async function updateStat() {
  const connection = await tOrmCon;

  const queryRunner = connection.createQueryRunner();

  await queryRunner.connect();

  await queryRunner.startTransaction();

  try {
    const channels = await queryRunner.query(
      "select * from channels where tgstat_id is not null"
    );

    for (let channel of channels) {
      const statistics = await new StatGetter(channel.tgstat_id).get();

      console.log(channel, statistics);

      await queryRunner
        .query(
          "update channels set participants_count = $1, post_reach = $2, err = $3, cpm = $4 where id = $5",
          [
            statistics.participants_count,
            statistics.avg_post_reach,
            statistics.err_percent,
            ((channel.price / statistics.avg_post_reach) * 1000).toFixed(0),
            channel.id,
          ]
        )
        .catch((e) => {
          console.log(e);
        });
    }

    await queryRunner.commitTransaction();
  } catch (error) {
    console.log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
}

module.exports = Cron;
