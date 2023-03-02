const {
  Telegraf,
  Composer,
  Scenes: { WizardScene },
} = require("telegraf");
const moment = require("moment");
const { CustomWizardScene } = require("telegraf-steps");
const tOrmCon = require("../../db/connection");
const authAdmin = require("../../Utils/authAdmin");
const FilesHandler = require("../../Utils/fileHandler");

const scene = new CustomWizardScene("changeTextScene");

scene.enter(async (ctx) => {
  const { edit, main_menu_button } = ctx.scene.state;

  const res = await authAdmin(ctx.from.id, true).catch(() => {
    ctx.replyWithTitle("CANT_AUTH");
    return ctx.scene.enter("clientScene");
  });

  if (!res) {
    return ctx.scene.enter("clientScene");
  }

  const keyboard = "change_text_actions_keyboard";
  const title = ctx.getTitle("CHANGE_TEXT", [
    ctx.getTitle("START_TITLE"),
    ctx.getTitle("RULES_TITLE"),
  ]);

  if (main_menu_button) await ctx.replyWithKeyboard("⚙️", main_menu_button);

  ctx.replyWithKeyboard(title, keyboard);
});

scene.action(/change\_(.+)/g, (ctx) => {
  ctx.answerCbQuery().catch(console.log);

  ctx.scene.state.input.type = ctx.match[1];

  ctx.replyStep(1);
});

scene.addNullStep().addStep({
  variable: "text",
  type: "confirm",
  cb: (ctx) => {
    ctx.answerCbQuery().catch(console.log);

    const { type, text } = ctx.scene.state.input;

    ctx.setTitle(type, text);

    ctx.scene.reenter();
  },
});

module.exports = scene;
