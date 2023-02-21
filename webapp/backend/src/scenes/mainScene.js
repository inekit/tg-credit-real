const e = require("express");
const {
  CustomWizardScene,
  createKeyboard,
  handlers: { FilesHandler },
  telegraf: { Markup },
} = require("telegraf-steps");
const moment = require("moment");
const tOrmCon = require("../db/connection");
const getUser = require("../Utils/getUser");
const { use } = require("../stages");
const { Composer } = require("telegraf");

const scene = new CustomWizardScene("clientScene").enter(async (ctx) => {
  const { visual = true, from_dialogs } = ctx.scene.state;
  let userObj = (ctx.scene.state.userObj = await getUser(ctx));

  const connection = await tOrmCon;

  if (!userObj) {
    const referer_id = /^ref-([0-9]+)$/g.exec(ctx.startPayload)?.[1];
    userObj = await connection
      .getRepository("User")
      .save({
        id: ctx.from.id,
        username: ctx.from.username,
        referer_id,
      })
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });
  }

  if (userObj.user_id)
    ctx.replyWithKeyboard("ENTER_NAME", "main_menu_admin_keyboard");
  //else ctx.replyWithKeyboard("ENTER_NAME", "main_keyboard");

  ctx.replyWithKeyboard("AGREE_TITLE", {
    name: "agree_keyboard",
    args: [userObj?.user_id],
  });
});
/*
  .addSelect({
    variable: "agree",
    options: {
      "Отправить посылку": "agree",
      "Могу доставить": "delivery",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch((e) => {});
      return ctx.replyNextStep();
    },
  })
  .addSelect({
    variable: "question1",
    header: "QUESTION_1",
    keyboard: "question1_keyboard",
    options: {
      1: 2,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: "skip",
    },
    cb: async (ctx) => {
      await ctx.answerCbQuery().catch((e) => {});

      ctx.scene.state.input = { question1: ctx.match[0] };

      ctx.replyNextStep();
    },
  })*/
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

module.exports = [scene];
