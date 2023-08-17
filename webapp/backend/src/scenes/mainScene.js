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

  ctx.replyWithKeyboard("START_TITLE", "remove_keyboard");
});

scene.on("message", async (ctx) => {
  ctx.replyWithTitle("UNAVAILABLE_MESSAGE");
});
module.exports = scene;
