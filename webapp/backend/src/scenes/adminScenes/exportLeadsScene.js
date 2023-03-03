const {
  Telegraf,
  Composer,
  Scenes: { WizardScene },
} = require("telegraf");
const moment = require("moment");
const { CustomWizardScene } = require("telegraf-steps");
const tOrmCon = require("../../db/connection");
const { AsyncParser } = require("@json2csv/node");
const connection = require("../../db/connection");

const scene = new CustomWizardScene("exportLeadsScene");

scene.enter(async (ctx) => {
  const { edit, main_menu_button } = ctx.scene.state;

  const connection = await tOrmCon;
  const leads = await connection.query(
    `select l.datetime_created, i.city_name, i.name, l.question_1, l.phone 
    from leads l left join items i on item_id = i.id`
  );

  leads.map((el) => {
    el.datetime_created = moment(el.datetime_created).format("HH.mm DD.MM.YYY");
    el.who =
      el.question_1 === "skip"
        ? "Нет"
        : ctx.getTitle("ANSWER_1_" + el.question_1.toString().toUpperCase());
    delete el.question_1;
  });

  console.log(leads);

  const opts = {};
  const transformOpts = {};
  const asyncOpts = {};
  const parser = new AsyncParser(opts, transformOpts, asyncOpts);

  const csv = await parser.parse(leads).promise();

  ctx.telegram
    .sendDocument(ctx.from.id, {
      filename: `leads.csv`,
      source: csv,
    })
    .catch((e) => {
      console.log(e);
      ctx.telegram
        .sendMessage(ctx.from.id, ctx.getTitle("NO_FILE"), {
          reply_markup,
        })
        .catch(console.log);
    });
});

module.exports = scene;
