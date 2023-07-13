const { google } = require("googleapis");

const tOrmCon = require("../db/connection");
require("dotenv").config();
const credentialFilename = "../../sm_credentials.json";
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
    .query("select io.id, io.table_name from item_options io")
    .catch((e) => console.log(e));

  const sheets = google.sheets({ version: "v4", auth });

  let res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Склад(Изм)!B3:E300",
  });

  console.log(res.data);
  const tableData = res.data.values;

  for (let option of options) {
    const stock = tableData?.find((el) => el[0] === option.table_name)?.[3];

    if (!stock) {
      console.log("stock", stock, option.table_name);
      continue;
    }

    await connection
      .query("update item_options set stock = $1 where table_name = $2", [
        stock,
        option.table_name,
      ])
      .catch((e) => console.log(e));
  }
}

async function dropOrder(order_id) {
  if (!order_id) return;

  try {
    const sheets = google.sheets({ version: "v4", auth });

    let ids = (
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Заказы(бот)!D3:D",
      })
    )?.data.values;

    //console.log(ids);

    let start_id, end_id;

    for (let index in ids) {
      console.log(ids?.[index]?.[0]);
      if (ids?.[index]?.[0] == order_id) {
        start_id = +index;
        break;
      }
    }

    if (!start_id) return;

    let index = start_id + 1;
    end_id = start_id;
    do {
      if (!ids?.[index]?.[0]) end_id = index;
      else break;
      index++;
      //console.log(index);
    } while (index < ids.length);

    if (index >= ids.length) end_id = start_id + 100;

    //console.log(12, start_id, end_id);

    const res = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 1865953136,
                dimension: "ROWS",
                startIndex: start_id + 2,
                endIndex: end_id + 3,
              },
            },
          },
        ],
      },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
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
    items: itemsPast,
    surname,
    name,
    patronymic,
    comment,
  } = (orderData = {})
) {
  try {
    const sheets = google.sheets({ version: "v4", auth });

    let [last_id, last_index_id, last_row_id] = (
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Заказы(бот)!R1:T1",
      })
    )?.data.values?.[0];

    last_row_id = +last_row_id;
    last_index_id = +last_index_id;
    last_row_id = +last_row_id;

    const itemsNew = [...itemsPast];

    const firstItem = itemsNew.shift();

    const insertingRows = itemsNew?.map((item) => {
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
      +last_id + 1,
      true,
      moment(new Date()).format("DD.MM.YYYY"),
      order_id,
      is_payed,
      "TG BOT",
      "Tg",
      selected_dm === "Почта России" ? "Поч" : null,
      `${surname} ${name} ${patronymic}`,
      phone,
      address,
      total,
      delivery_price,
      firstItem?.table_name,
      firstItem?.count,
      comment,
    ]);

    /*const append_res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Заказы(бот)!A3:Q3",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        majorDimension: "ROWS",
        values: insertingRows,
      },
    });*/

    const res = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          {
            insertDimension: {
              range: {
                sheetId: 1865953136,
                dimension: "ROWS",
                startIndex: last_row_id,
                endIndex: last_row_id + itemsPast?.length,
              },
              inheritFromBefore: true,
            },
          },
        ],
      },
    });

    /*const resource = {
      valueInputOption: "USER_ENTERED",
      data: [
        {
          range: "Заказы(бот)!A22:S6",
          values: [["1", "2"]],
        },
      ],
    };

    let result = await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId,
      resource,
    });
    console.log("1", result);*/

    const append_res = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Заказы(бот)!A${last_row_id + 1}:P${
        last_row_id + 1 + itemsPast?.length
      }`,
      valueInputOption: "USER_ENTERED",
      resource: {
        majorDimension: "ROWS",
        values: insertingRows,
      },
    });

    console.log("append_res", append_res.data.tableRange);

    const lastIdRow = parseInt(
      append_res.data.tableRange
        ?.substring(append_res.data.tableRange.length - 3)
        ?.replace(/[^0-9]/g, "")
    );

    console.log(lastIdRow);

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      resource: {
        requests: [
          {
            addDimensionGroup: {
              range: {
                sheetId: 1865953136,
                dimension: "ROWS",
                startIndex: last_index_id,
                endIndex: lastIdRow,
              },
            },
          },
          {
            updateDimensionGroup: {
              dimensionGroup: {
                range: {
                  dimension: "ROWS",
                  sheetId: 1865953136,
                  startIndex: last_index_id,
                  endIndex: lastIdRow,
                },
                depth: 1,
                collapsed: true,
              },
              fields: "*",
            },
          },
        ],
      },
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { updateStock, addOrder, dropOrder };
