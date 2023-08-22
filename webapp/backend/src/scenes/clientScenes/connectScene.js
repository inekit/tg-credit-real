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

  ctx.replyWithKeyboard("ENTER_NAME", "main_menu_back_keyboard");
  //ctx.wizard.selectStep(0);
});
scene
  .addStep({
    variable: "name",
    cb: async (ctx) => {
      ctx.scene.state.input = { name: ctx.message.message_id };
      await ctx.replyWithKeyboard("ENTER_ADD_TYPE", "add_type_keyboard");
      ctx.wizard.selectStep(ctx.wizard.cursor + 1);
    },
  })
  .addSelect({
    variable: "add_type",
    options: {
      1: "add_type_1",
      2: "add_type_2",
      3: "add_type_3",
      4: "add_type_ALL",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch(console.log);
      const index = ctx.match[0].lastIndexOf("_");
      ctx.scene.state.input.add_type = ctx.match[0].slice(index + 1);
      console.log(ctx.match);
      ctx.replyNextStep();
    },
  })
  .addStep({
    variable: "post",
    cb: async (ctx) => {
      ctx.scene.state.input.post = ctx.message.message_id;
      ctx.wizard.state.input.photos = [];
      await ctx.replyWithKeyboard("ENTER_PHOTOS", "skip_keyboard");
      ctx.wizard.selectStep(ctx.wizard.cursor + 1);
    },
  })
  .addStep({
    variable: "photos",
    type: "action",
    handler: new Composer()
      .action("skip", async (ctx) => {
        await ctx.answerCbQuery().catch(console.log);
        sendToAdmin(ctx);
      })
      .action("confirm", async (ctx) => {
        await ctx.answerCbQuery().catch(console.log);
        sendToAdmin(ctx);
      })
      .on("photo", async (ctx) => {
        ctx.wizard.state.input.photos.push(ctx.message.message_id);
        ctx.replyWithTitle("CONFIRM_TITLE", "confirm_keyboard");
      }),
  });

async function sendToAdmin(ctx) {
  const { post, name, add_type, photos } = ctx.wizard.state.input;

  ctx.replyWithTitle("APPOINTMENT_SENT");
  await ctx.telegram
    .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, name)
    .catch((e) => {
      console.log(e);
    });
  await ctx.telegram
    .sendMessage(process.env.ADMIN_ID, ctx.getTitle("ADD_TYPE_" + add_type))
    .catch((e) => {
      console.log(e);
    });
  await ctx.telegram
    .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, post)
    .catch((e) => {
      console.log(e);
    });
  if (photos.length)
    for (let photo of photos)
      await ctx.telegram
        .forwardMessage(process.env.ADMIN_ID, ctx.chat.id, photo)
        .catch((e) => {
          console.log(e);
        });
}

module.exports = scene;
