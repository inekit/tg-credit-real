const tOrmCon = require("../../db/connection");

module.exports = async (id, ctx) => {
  const connection = await tOrmCon;

  const cIdObj = await connection
    .query(
      "update orders set status = 'Оплачен' where id = $1 returning user_id, total",
      [id]
    )
    .catch(console.log);

  const customer_id = cIdObj?.[0]?.[0]?.user_id;
  const sum = cIdObj?.[0]?.[0]?.total;

  console.log(id, customer_id, sum);

  if (!customer_id) return;

  await ctx.telegram
    .sendMessage(customer_id, ctx.getTitle("APPOINTMENT_PAYED", [id, sum]))
    .catch(console.log);
};
