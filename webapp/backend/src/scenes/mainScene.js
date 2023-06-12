const {
  CustomWizardScene,
  createKeyboard,
  handlers: { FilesHandler },
  telegraf: { Markup },
} = require("telegraf-steps");
const tOrmCon = require("../db/connection");
const getUser = require("../Utils/getUser");

const scene = new CustomWizardScene("clientScene").enter(async (ctx) => {
  let userObj = (ctx.scene.state.userObj = await getUser(ctx));

  const connection = await tOrmCon;

  if (!userObj) {
    userObj = await connection
      .getRepository("User")
      .save({
        id: ctx.from.id,
        username: ctx.from.username,
      })
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });

    await connection
      .getRepository("Order")
      .save({
        user_id: ctx.from.id,
        status: "basket",
      })
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });
  } else
    await connection
      .query("update users set username = $1 where id = $2", [
        ctx.from.username,
        ctx.from.id,
      ])
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });

  ctx.replyWithKeyboard("START_TITLE", "main_menu_keyboard");
});

scene.hears(titles.getValues("WEBAPP_BUTTON"), (ctx) => {
  ctx.replyWithKeyboard("WEBAPP_TITLE", {
    name: "webapp_keyboard",
    args: [ctx.from.id],
  });
});

scene.hears(titles.getValues("ABOUT_BUTTON"), (ctx) => {
  ctx.replyWithTitle("ABOUT_TITLE");
});

scene.hears(titles.getValues("CHANNEL_BUTTON"), (ctx) => {
  ctx.replyWithTitle("CHANNEL_TITLE");
});

scene.hears(titles.getValues("SUPPORT_BUTTON"), (ctx) => {
  ctx.replyWithKeyboard("SUPPORT_TITLE", "chat_keyboard", [ctx.from.id]);
});

scene.hears(titles.getValues("ORDERS_BUTTON"), (ctx) => {
  ctx.scene.enter("ordersScene");
});
module.exports = scene;
