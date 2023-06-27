const { Composer } = require("telegraf");
const {
  CustomWizardScene,
  titles,
  handlers: { FilesHandler },
} = require("telegraf-steps");
const tOrmCon = require("../../db/connection");
require("dotenv").config();
const scene = new CustomWizardScene("payScene").enter(async (ctx) => {
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

scene.addStep({
  variable: "photos",
  type: "action",
  handler: new FilesHandler(async (ctx) => {
    await ctx.answerCbQuery().catch(console.log);

    if (ctx.scene.state.sent) return;

    const { photos } = ctx.wizard.state.input;

    const order_id = ctx.scene.state.order_id;

    const connection = await tOrmCon;
    connection
      .query(`update orders set reciept_photo_id=$1 where id = $2`, [
        photos,
        order_id,
      ])
      .then(async (res) => {
        ctx.scene.state.sent = true;

        ctx.replyWithTitle("GM_SENT");

        ctx.telegram
          .sendMessage(
            process.env.ADMIN_ID,
            ctx.getTitle("NEW_GM_PAYMENT", order_id)
          )
          .catch((e) => {});
      })
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });
  }),
});

scene.on("message", async (ctx) => {
  ctx.replyWithTitle("UNAVAILABLE_MESSAGE");
});

module.exports = scene;
