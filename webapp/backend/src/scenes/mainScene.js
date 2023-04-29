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

  const static = (
    await connection.query(`select * from statics where id = 1;`)
  )?.[0];

  const clearedGreeting = static.greeting
    ?.replaceAll("<p>", "")
    ?.replaceAll("</p>", "\n")
    ?.replaceAll(/\<\/?(br|ol|li|ul|blockquote|span)(?!\>)?\>/g, "");

  ctx.replyWithKeyboard(clearedGreeting, "main_menu_keyboard");
  //"START_TITLE"
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

scene.hears(titles.getValues("CHAT_BUTTON"), (ctx) => {
  ctx.replyWithKeyboard("CHAT_TITLE", "chat_keyboard", [ctx.from.id]);
});

scene.hears(titles.getValues("ORDERS_BUTTON"), (ctx) => {
  ctx.scene.enter("ordersScene");
});
module.exports = scene;
