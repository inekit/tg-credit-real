const { google } = require("googleapis");

const tOrmCon = require("../db/connection");
require("dotenv").config();
const credentialFilename = "credentials.json";
const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
const moment = require("moment");
const auth = new google.auth.GoogleAuth({
  keyFile: credentialFilename,
  scopes: scopes,
});

const spreadsheetId =
  process.env.SHEET_ID ?? "1uqJHLTH6BMdZU_7LIptjlFgn74M4qpT6boJewfd2GN8";

async function updateStock() {
  const connection = await tOrmCon;

  const options = await connection
    .query("select io.id, io.table_name from item_options")
    .catch((e) => console.log(e));

  const sheets = google.sheets({ version: "v4", auth });

  let res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Склад(Изм)!B3:E200",
  });

  console.log(res.data);
  const tableData = res.data.values;

  for (let option of options) {
    const stock = tableData?.find((el) => el[0] === option.table_name)?.[3];
    if (!stock) continue;

    await connection
      .query("update item_options set stock = $1 where table_name = $2", [
        stock,
        option.table_name,
      ])
      .catch((e) => console.log(e));
  }
}

async function addOrder(
  {
    order_id,
    is_payed = false,
    selected_dm,
    phone,
    address,
    total,
    delivery_price,
    items,
    surname,
    name,
    patronymic,
  } = (orderData = {})
) {
  try {
    const sheets = google.sheets({ version: "v4", auth });

    let last_id = +(
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Заказы(изм)!R3",
      })
    )?.data.values?.[0]?.[0];

    const last_index_id = +(
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Заказы(изм)!S3",
      })
    )?.data.values?.[0]?.[0];

    const firstItem = items.shift();

    const insertingRows = items?.map((item) => {
      return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        item.table_name,
        item.count,
      ];
    });

    insertingRows?.unshift([
      last_id + 1,
      true,
      moment(new Date()).format("DD.MM.YYYY"),
      order_id,
      is_payed,
      "TG BOT",
      "Tg",
      selected_dm === "Почта России" ? "Поч" : selected_dm,
      `${surname} ${name} ${patronymic}`,
      phone,
      address,
      total,
      delivery_price,
      firstItem?.table_name,
      firstItem?.count,
    ]);

    const append_res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Заказы(изм)!A3:A3",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        majorDimension: "ROWS",
        values: insertingRows,
      },
    });

    const lastIdRow = +append_res.data.tableRange?.substring(
      append_res.data.tableRange.length - 3
    );

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          {
            addDimensionGroup: {
              range: {
                sheetId: 1018969262,
                dimension: "ROWS",
                startIndex: last_index_id,
                endIndex: lastIdRow,
              },
            },
          },
        ],
      },
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { updateStock, addOrder };
