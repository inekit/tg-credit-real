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
    },
  });
});

async function sendAppointment(ctx) {
  const connection = await tOrmCon;

  connection
    .query("update users set phone = $1 where id = $2", [
      ctx.scene.state.phone,
      ctx.from.id,
    ])
    .catch(console.log);
  ctx.replyWithTitle("APPOINTMENT_SENT");

  const admins = await connection.getRepository("Admin").find();
  for (admin of admins) {
    await ctx.telegram.sendMessage(
      admin.user_id,
      ctx.getTitle("NEW_APPOINTMENT", [ctx.scene.state.phone])
    );
  }
}

scene.on("contact", (ctx) => {
  ctx.scene.state.phone = ctx.message.contact?.phone_number;
  sendAppointment(ctx);
});

module.exports = scene;
