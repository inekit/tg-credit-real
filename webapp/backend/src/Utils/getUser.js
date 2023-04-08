const tOrmCon = require("../db/connection");

module.exports = async function getUser(ctx) {
  const connection = await tOrmCon;

  let userObj = await connection
    .query(
      `SELECT u.* FROM users u 
        where u.id = $1
        limit 1`,
      [ctx.from?.id]
    )
    .catch((e) => {
      console.log(e);
      ctx.replyWithTitle("DB_ERROR");
    });

  console.log(
    "balance_log rub id",
    userObj?.[0]?.balance_rub,
    userObj?.[0]?.id
  );

  return userObj?.[0];
};
