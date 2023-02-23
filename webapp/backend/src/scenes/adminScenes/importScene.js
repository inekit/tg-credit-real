const {
  Composer,
  Scenes: { WizardScene },
} = require("telegraf");
const adminIdHandler = new Composer(),
  newIdHandler = new Composer(),
  roleHandler = new Composer();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const scene = new WizardScene(
  "importScene",
  adminIdHandler,
  newIdHandler,
  roleHandler
);

const tOrmCon = require("../../db/connection");

scene.enter(async (ctx) => {
  const { edit, main_menu_button } = ctx.scene.state;

  //  const keyboard = "admins_actions_keyboard";
  const title = ctx.getTitle("SEND_FILE");

  if (main_menu_button) await ctx.replyWithKeyboard("⚙️", main_menu_button);

  if (edit) return ctx.editMenu(title, keyboard);
  ctx.replyWithTitle(title);
});

scene.on("document", async (ctx) => {
  console.log(ctx.message.document.file_id);
  const link = await ctx.telegram
    .getFileLink(ctx.message.document.file_id)
    .catch(console.log);

  if (!link) return;

  console.log(link);

  const response = await axios(link.href, {
    url: link.href,
    responseType: "arraybuffer",
  }).catch((e) => console.log(e));

  await putToDB(response.data)
    .then((res) => {
      ctx.replyWithTitle("IMPORT_SUCCESS");
    })
    .catch((e) => {
      console.log(e);
      ctx.replyWithTitle("IMPORT_ERROR");
    });
});

async function putToDB(excelData) {
  return new Promise(async (res, rej) => {
    const connection = await tOrmCon;
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const data = await transformExcelData(await parseExcel(excelData));
      await queryRunner.query("delete from items");

      for (row of data) {
        await queryRunner.manager.getRepository("Item").save(await row);
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      rej(err);
    } finally {
      await queryRunner.release();
      res();
    }
  });
}

async function transformExcelData(excelData) {
  const transformObj = {
    "id ЖК": "id",
    Город: "city_name",
    Застройщик: "developer_name",
    "Группа компаний": "company_name",
    "Название ЖК": "name",
    Широта: "latitude",
    Долгота: "longitude",
    Адрес: "address",
    "Метро 1": "metro_1",
    "Метро 2": "metro_2",
    "Метро 3": "metro_3",
    "Проектная декларация": "declaration",
    "Ввод в эксплуатацию": "commissioning",
    "Ввод в эксплуатацию год": "commissioning_year",
    "Диапазон ввод в экспл.": "commissioning_diapason",
    "Выдача ключей": "issuance_date",
    "Средняя цена за 1 м²": "meter_price",
    "Класс недвижимости": "property_class",
    "Материал стен": "material",
    "Тип отделки": "finish_type",
    "Количество этажей": "floor_count",
    "Количество квартир": "apartment_count",
    "Жилая площадь, м²": "square",
    "Количество мест в паркинге": "parking_spaces_count",
    Описание: "description",
  };

  excelData = excelData
    ?.filter((el) => el["id ЖК"])
    ?.map(async (el) => {
      for (let [key, value] of Object.entries(transformObj)) {
        el[value] = el[key];
        delete el[key];
      }

      el.meter_price = parseInt(el.meter_price);
      el.meter_price = isNaN(el.meter_price) ? undefined : el.meter_price;

      el.sale_percent = parseInt(el["Распроданность квартир %"] * 100);
      delete el["Распроданность квартир %"];
      delete el["Диапазон цен"];
      delete el["Дипазон распроданности"];

      const match = /^(.+)-(.+)$/g.exec(el["Высота потолков, м"]);

      el.ceiling_height_min = parseFloat(
        match?.[1]?.replace(",", ".") ?? el["Высота потолков, м"]
      );
      el.ceiling_height_max = parseFloat(
        match?.[2]?.replace(",", ".") ?? el["Высота потолков, м"]
      );

      delete el["Высота потолков, м"];
      //'Высота потолков, м': '2,8 - 3,1',

      el.images_count = (
        await fs.promises
          .readdir(`${process.env.STATIC_FOLDER}/${el.id}`, {
            withFileTypes: true,
          })
          .catch((e) => {})
      )?.filter((item) => !item.isDirectory())?.length;

      return el;
    });

  return excelData;
}

async function parseExcel(buffer) {
  const excel = require("exceljs");
  const workbook = new excel.Workbook();
  // use readFile for testing purpose
  // await workbook.xlsx.load(objDescExcel.buffer);
  await workbook.xlsx.load(buffer);
  let jsonData = [];
  workbook.worksheets.forEach(function (sheet) {
    let firstRow = sheet.getRow(1);
    //if (!firstRow.cellCount) return;
    let keys = firstRow.values;
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber == 1) return;
      let values = row.values;
      let obj = {};
      for (let i = 1; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }
      jsonData.push(obj);
    });
  });
  return jsonData;
}

newIdHandler.action("cancel", async (ctx) => {
  await ctx.answerCbQuery().catch((e) => {});

  ctx.scene.state.canUpdateAdmins = false;
  ctx.replyWithKeyboard("CONFIRM_ADDING", "confirm_keyboard");
  ctx.wizard.next();
});

roleHandler.action("confirm", async (ctx) => {
  const { newId, canUpdateAdmins } = ctx.scene.state;

  const res = await require("../../Utils/authAdmin")(ctx.from.id, true).catch(
    () => {
      ctx.answerCbQuery("CANT_AUTH");
      return ctx.scene.enter("clientScene");
    }
  );

  if (!res) {
    return ctx.scene.enter("clientScene");
  }

  const connection = await tOrmCon;
  await connection
    .getRepository("Admin")
    .insert({
      user_id: newId,
      can_update_admins: canUpdateAdmins,
    })
    .then(async () => {
      await ctx.answerCbQuery("ADMIN_HAS_BEEN_ADDED").catch(console.log);
    })
    .catch(async (e) => {
      console.log(e);
      await ctx.answerCbQuery("ADMIN_HAS_NOT_BEEN_ADDED").catch(console.log);
    });

  delete ctx.scene.state.newId, ctx.scene.state.canUpdateAdmins;

  ctx.scene.reenter({ edit: true });
});

module.exports = scene;
