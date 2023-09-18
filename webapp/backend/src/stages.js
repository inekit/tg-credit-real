const {
  Telegraf,
  Scenes: { Stage },
  Composer,
} = require("telegraf");
const titles = require("telegraf-steps").titlesGetter(__dirname + "/Titles");
const tOrmCon = require("./db/connection");
const sendOrder = require("./Utils/sendOrder");
require("dotenv").config();
const getUser = require("./Utils/getUser");

const moment = require("moment");
const mainStage = new Stage(
  [
    require("./scenes/mainScene"),
    require("./scenes/clientScenes/connectScene"),
  ],
  {
    default: "clientScene",
  }
);

mainStage.use(async (ctx, next) => {
  const user = await getUser(ctx);
  if (!user.ban) return next();

  return await ctx.replyWithTitle("YOU_ARE_BANNED", {});
});

mainStage.start(async (ctx) => ctx.scene.enter("clientScene"));

const adminStage = new Stage([
  //require("./scenes/adminScenes/adminScene"),
  // require("./scenes/adminScenes/adminsScene"),
  //require("./scenes/adminScenes/adsLinkScene"),
  //require("./scenes/adminScenes/claimsScene"),
  //require("./scenes/adminScenes/confirmCertificate"),
]);

mainStage.action(/^connect\_([0-9]+)$/g, async (ctx) => {
  const channel_id = ctx.match[1];

  await ctx.answerCbQuery().catch((e) => {});

  ctx.scene.enter("connectScene", { channel_id });
});

mainStage.hears(titles.getValues("BUTTON_BACK_USER"), (ctx) =>
  ctx.scene.enter("clientScene")
);

const stages = new Composer();

stages.use(Telegraf.chatType("private", mainStage.middleware()));
stages.use(Telegraf.chatType("private", adminStage.middleware()));

module.exports = stages;
