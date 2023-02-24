const {
  Composer,
  Scenes: { BaseScene },
} = require("telegraf");

const scene = new BaseScene("adminScene");
const main_menu_button = "admin_back_keyboard";
const tOrmCon = require("../db/connection");
const getUser = require("../Utils/getUser");

scene.enter(async (ctx) => {
  const user = await getUser();
  ctx.scene.state.phone = user.phone;

  if (user.phone)
    return ctx.replyWithKeyboard("USE_CURRENT_PHONE", "yes_no_keyboard");

  ctx.replyWithTitle("SEND_PHONE", {
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

scene.action("yes", (ctx) => {
  sendAppointment(ctx);
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
  ctx.scene.state.phone = ctx.contact.phone_number;
  sendAppointment(ctx);
});

scene.on("message", (ctx) => {
  if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.\/0-9]*$/g.test(text)) return;
  ctx.scene.state.phone = ctx.message.text;
  sendAppointment(ctx);
});

module.exports = scene;
