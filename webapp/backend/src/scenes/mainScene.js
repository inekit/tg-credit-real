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
  }

  ctx.replyWithKeyboard("START_TITLE", {
    name: "main_menu_keyboard",
  });
});

scene.hears(titles.getTitle("WEBAPP_BUTTON"), (ctx) => {
  ctx.replyWithKeyboard("WEBAPP_TITLE", {
    name: "webapp_keyboard",
    args: [ctx.from.id],
  });
});

scene.hears(titles.getTitle("ABOUT_BUTTON"), (ctx) => {
  ctx.replyWithTitle("ABOUT_TITLE");
});

scene.hears(titles.getTitle("ORDERS_BUTTON"), (ctx) => {
  ctx.scene.enter("ordersScene");
});

module.exports = scene;
