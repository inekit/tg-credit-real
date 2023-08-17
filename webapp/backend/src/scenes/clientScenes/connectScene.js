const { Composer } = require("telegraf");
const {
  CustomWizardScene,
  titles,
  handlers: { FilesHandler },
} = require("telegraf-steps");
const moment = require("moment");
const tOrmCon = require("../../db/connection");
const sendOrder = require("../../Utils/sendOrder");
require("dotenv").config();
const scene = new CustomWizardScene("connectScene").enter(async (ctx) => {
  ctx.scene.state.sent = false;

  const connection = await tOrmCon;
  const statics = (
    await connection.query(`select * from statics where id = 1`)
  )?.[0];

  ctx.replyWithKeyboard("ENTER_PHOTOS", "main_menu_back_keyboard", [
    statics?.card_number,
    statics?.sbp_number,
  ]);
  //ctx.wizard.selectStep(0);
});
scene
  .addStep({
    variable: "name",
    cb: (ctx) => {
      ctx.scene.state.input = { name: ctx.message.id };
      ctx.replyNextStep();
    },
  })
  .addStep({
    variable: "post",
    cb: async (ctx) => {
      ctx.scene.state.input.post = ctx.message.id;
      await ctx.replyWithKeyboard("ENTER_PHOTOS", "skip_keyboard");
      ctx.wizard.selectStep(ctx.wizard.cursor + 1);
    },
  })
  .addStep({
    variable: "photos",
    type: "action",
    handler: new Composer()
      .on("photo", async (ctx) => {
        const photo = ctx.message.id;
        sendToAdmin(ctx, photo);
      })
      .action("skip", async (ctx) => {
        await ctx.answerCbQuery().catch(console.log);
        sendToAdmin(ctx);
      }),
  });

async function sendToAdmin(ctx, photo) {
  const { post, name } = ctx.wizard.state.input;

  ctx.replyWithTitle("APPOINTMENT_SENT");
  await ctx.telegram
    .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, name)
    .catch((e) => {
      console.log(e);
      ctx.answerCbQuery().catch((e) => {});
    });
  await ctx.telegram
    .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, post)
    .catch((e) => {
      console.log(e);
      ctx.answerCbQuery().catch((e) => {});
    });
  await ctx.telegram
    .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, photo)
    .catch((e) => {
      console.log(e);
      ctx.answerCbQuery().catch((e) => {});
    });
}

scene.on("text", async (ctx) => {
  ctx.replyWithTitle("UNAVAILABLE_MESSAGE");
});

module.exports = scene;
