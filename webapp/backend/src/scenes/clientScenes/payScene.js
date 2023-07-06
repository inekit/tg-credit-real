const { Composer } = require("telegraf");
const {
  CustomWizardScene,
  titles,
  handlers: { FilesHandler },
} = require("telegraf-steps");
const tOrmCon = require("../../db/connection");
const sendOrder = require("../../Utils/sendOrder");
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

    const items = (
      await connection
        .query(
          `select 
        json_agg(json_build_object('title', i.title,'count',oi.count, 'id', io.id, 'price', i.price,'stock', io.stock,
        'sale_count', sale_count, 'sale_price', sale_price, 'option_name',io.name)) items 
        from orders o 
        left join order_items oi on o.id = oi.order_id  
        left join item_options io on oi.item_option_id = io.id  
        left join items i on io.item_id = i.id 
        where o.id = $1
        group by o.id
        limit 1`,
          [order_id]
        )
        .catch((e) => console.log(e))
    )[0].items;

    await connection
      .query(
        `update orders set reciept_photo_id=$1 where id = $2 returning *`,
        [photos, order_id]
      )
      .then(async (res) => {
        ctx.scene.state.sent = true;

        ctx.replyWithTitle("GM_SENT");

        await sendOrder(
          ctx,
          Object.assign(res?.[0]?.[0], { username: ctx.from.username }),
          items,
          false,
          true
        );
      })
      .catch(async (e) => {
        console.log(e);
        ctx.replyWithTitle("DB_ERROR");
      });
  }),
});

scene.on("text", async (ctx) => {
  ctx.replyWithTitle("UNAVAILABLE_MESSAGE");
});

module.exports = scene;
