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
  }

  if (userObj.user_id)
    return ctx.replyWithKeyboard("AGREE_TITLE", "main_admin_keyboard");

  ctx.replyWithKeyboard("AGREE_TITLE", "agree_keyboard");
});

scene
  .addSelect({
    variable: "agreement",
    options: {
      Согласиться: "agree",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch((e) => {});
      ctx.replyWithKeyboard("QUESTION_1", "question1_keyboard");
      ctx.wizard.selectStep(ctx.wizard.cursor + 1);
    },
  })
  .addSelect({
    variable: "question_1",
    options: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "skip",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch((e) => {});

      ctx.scene.state.input = { question1: ctx.match[0] };

      const connection = await tOrmCon;

      await connection
        .query("update users set question_1 = $1 where id = $2", [
          ctx.match[0],
          ctx.from.id,
        ])
        .catch(console.log);

      ctx.replyWithKeyboard("WEBAPP_TITLE", "webapp_keyboard");
      ctx.wizard.selectStep(ctx.wizard.cursor + 1);
    },
  })
  .addSelect({
    variable: "web_app",
    options: {
      1: "help",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch((e) => {});
      ctx.replyWithTitle("ABOUT_TITLE");
    },
  });

scene.action(/^consult\-([0-9]+)$/g, async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  ctx.scene.enter("getPhoneScene", { object_id: ctx.match[1] });
});

scene.command("vitrina", (ctx) => {
  ctx.replyWithKeyboard("WEBAPP_TITLE", "webapp_keyboard");
  ctx.wizard.selectStep(2);
});

scene.command("about", (ctx) => {
  ctx.replyWithTitle("ABOUT_TITLE");
});

scene.on("message", (ctx) => ctx.replyWithTitle("ENTER_RIGHT_COMMAND"));

module.exports = scene;
