const tOrmCon = require("../../db/connection");
const crypto = require("crypto");
require("dotenv").config();
module.exports = async (InvId, OutSum, SignatureValue, ctx) => {
  const connection = await tOrmCon;

  const realOrderObj = (
    await connection
      .query("select * from orders where id = $1", [InvId])
      .catch(console.log)
  )?.[0];

  const realSignature = crypto
    .createHash("md5")
    .update(
      `${process.env.ROBO_MERCHANT_LOGIN}:${realOrderObj.total}:${realOrderObj.id}:${process.env.ROBO_PASSWORD}`
    )
    .digest("hex");

  console.log(
    `${process.env.ROBO_MERCHANT_LOGIN}:${realOrderObj.total}:${realOrderObj.id}:${process.env.ROBO_PASSWORD}`,
    realSignature,
    SignatureValue
  );

  if (SignatureValue !== realSignature) return;

  const cIdObj = await connection
    .query(
      "update orders set status = 'Оплачен' where id = $1 returning user_id, total",
      [InvId]
    )
    .catch(console.log);

  const customer_id = cIdObj?.[0]?.[0]?.user_id;
  const sum = cIdObj?.[0]?.[0]?.total;

  console.log(id, customer_id, sum);

  if (!customer_id) return;

  await ctx.telegram
    .sendMessage(customer_id, ctx.getTitle("APPOINTMENT_PAYED", [InvId, sum]))
    .catch(console.log);
};
