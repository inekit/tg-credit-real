const {
  Telegraf,
  Scenes: { Stage },
  Composer,
} = require("telegraf");
const titles = require("telegraf-steps").titlesGetter(__dirname + "/Titles");
const tOrmCon = require("./db/connection");
require("dotenv").config();
const mainStage = new Stage(
  [
    require("./scenes/mainScene"),
    require("./scenes/clientScenes/ordersScene"),
    require("./scenes/clientScenes/payScene"),
  ],
  {
    default: "clientScene",
  }
);

mainStage.start(async (ctx) => ctx.scene.enter("clientScene"));

mainStage.hears(titles.getValues("BUTTON_BACK_USER"), (ctx) =>
  ctx.scene.enter("clientScene")
);
mainStage.hears(titles.getValues("BUTTON_CLIENT_MENU"), async (ctx) => {
  await ctx.replyWithKeyboard("BACK_CLIENT_TITLE", "remove_keyboard");
  ctx.scene.enter("clientScene");
});

const adminStage = new Stage([
  //require("./scenes/adminScenes/adminScene"),
  // require("./scenes/adminScenes/adminsScene"),
  //require("./scenes/adminScenes/adsLinkScene"),
  //require("./scenes/adminScenes/claimsScene"),
  //require("./scenes/adminScenes/confirmCertificate"),
]);

mainStage.hears(titles.getValues("BUTTON_BACK_ADMIN"), (ctx) => {
  ctx.scene.enter("adminScene");
});

mainStage.action(/^status\_([0-9]+)\_([.+]+)$/g, async (ctx) => {
  if (ctx.chat.id != process.env.ADMIN_ID)
    return await ctx
      .answerCbQuery(ctx.getTitle("CANT_CHANGE_STATUS_RIGHTS"))
      .catch((e) => {});

  const order_id = ctx.match[1];
  const status = ctx.match[2];

  const connection = await tOrmCon;

  const [res, is_updated] = await connection
    .query("update orders set status = $1 where id = $2 returning *", [
      status,
      order_id,
    ])
    .catch((e) => console.log(e));

  if (!is_updated)
    return await ctx
      .answerCbQuery(ctx.getTitle("CANT_CHANGE_STATUS"))
      .catch((e) => {});

  const {
    creation_date,
    username,
    user_id,
    selected_dm,
    address,
    postal_code,
    surname,
    name,
    patronymic,
    phone,
    comment,
    selected_po,
    delivery_price,
    promo_code,
    total,
  } = res?.[0];

  ctx.editMessageText(
    ctx.getTitle("NEW_ORDER", [
      order_id,
      moment(creation_date).format("DD.MM.YYYY"),
      username ? `@${username}` : " ",
      user_id,
      selected_dm,
      address,
      postal_code,
      surname,
      name,
      patronymic,
      phone,
      comment ?? "Нет",
      selected_po,
      delivery_price ? `${delivery_price} руб.` : "Не учтена",
      promo_code ?? "Не использован",
      total,
      status,
      comment,
    ])
  );
});

mainStage.action(/^pay\_([0-9]+)$/g, async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  ctx.scene.enter("payScene", { order_id: ctx.match[1] });
});

/*mainStage.on("web_app_data", (ctx) => {
  console.log(ctx);
  ctx.replyWithTitle("ITEM_INFO_TITLE");
});*/

mainStage.action("admin", async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  ctx.scene.enter("adminScene");
});

const stages = new Composer();

stages.use(Telegraf.chatType("private", mainStage.middleware()));
stages.use(Telegraf.chatType("private", adminStage.middleware()));

module.exports = stages;
