const {
  CustomWizardScene,
  createKeyboard,
  handlers: { FilesHandler },
  telegraf: { Markup },
} = require("telegraf-steps");

const scene = new CustomWizardScene("getPhoneScene");
const tOrmCon = require("../db/connection");
const getUser = require("../Utils/getUser");

scene.enter(async (ctx) => {
  const user = await getUser(ctx);
  ctx.scene.state.phone = user.phone;

  if (user.phone)
    return ctx.replyWithKeyboard(
      ctx.getTitle("USE_CURRENT_PHONE", [user.phone]),
      "yes_no_keyboard"
    );

  ctx.reply(ctx.getTitle("SEND_PHONE"), {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [
        [
          {
            text: "Оставить телефон",
            request_contact: true,
          },
        ],
      ],
    },
  });
});

scene.on("contact", (ctx) => {
  ctx.scene.state.phone = ctx.message.contact?.phone_number;
  sendAppointment(ctx);
});

scene.on("message", (ctx) => {
  if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.\/0-9]*$/g.test(ctx.message.text))
    return;
  ctx.scene.state.phone = ctx.message.text;
  sendAppointment(ctx);
});

scene.action("yes", async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  sendAppointment(ctx);
});

scene.action("no", async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  ctx.reply(ctx.getTitle("SEND_PHONE"), {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [
        [
          {
            text: "Оставить телефон",
            request_contact: true,
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

async function sendAppointment(ctx) {
  const connection = await tOrmCon;
  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  const { object_id, phone } = ctx.scene.state;

  try {
    const question1 = (
      await queryRunner.query(
        "update users set phone = $1 where id = $2 returning question_1",
        [phone, ctx.from.id]
      )
    )[0].question1;

    const { city, name } = (
      await queryRunner.query("select * from items where id = $1", [object_id])
    )[0];

    const lead_id = await queryRunner.query(
      "insert into leads (user_id, question_1, item_id, phone) values ($,$2,$3,$4) returning id",
      [ctx.from.id, question1, object_id, phone]
    )[0].id;

    ctx.replyWithKeyboard("APPOINTMENT_SENT", "remove_keyboard");

    const admins = await connection.getRepository("Admin").find();
    for (admin of admins) {
      await ctx.telegram.sendMessage(
        admin.user_id,
        ctx.getTitle("NEW_APPOINTMENT", [
          lead_id,
          moment().format("HH:mm DD.MM.YYYY"),
          city === "spb" ? "СПБ" : "МСК",
          object_id,
          name,
          question1 ?? "Нет",
          phone,
        ])
      );
    }

    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
}

module.exports = scene;
