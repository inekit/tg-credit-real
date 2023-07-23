require("dotenv").config();
const moment = require("moment");
const tOrmCon = require("../db/connection");

module.exports = async function sendOrder(
  ctx,
  orderData,
  items,
  edit = false,
  is_payment = false
) {
  const {
    id,
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
    status,
    reciept_photo_id,
    last_message_id,
  } = orderData;

  const statuses =
    status === "Завершен" || status === "Отменен"
      ? []
      : [
          "Новый",
          "Оплачен",
          "В обработке",
          "Доставляется",
          "Доставлен",
          "Завершен",
          "Отменен",
        ];

  const orderStr =
    items
      ?.map((el) =>
        el.id ? `📦 ${el.title} ${el.option_name} - ${el.count} (шт.)` : ""
      )
      ?.join("\n") ?? "";

  const titleName = is_payment ? "NEW_GM" : "NEW_ORDER";

  const title = ctx.getTitle(titleName, [
    id,
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
    orderStr,
    selected_po,
    delivery_price !== null && delivery_price !== undefined
      ? `${delivery_price} руб.`
      : "Не учтена",
    promo_code ?? "Не использован",
    total,
    status ?? "Новый",
    comment,
  ]);

  const keyboard = {
    parse_mode: "HTML",
    inline_keyboard: statuses.map((el) => [
      {
        text: el,
        callback_data: `status_${id}_${el}_${is_payment ? 1 : 0}`,
      },
    ]),
  };

  let message;

  console.log("upd5");

  if (!edit)
    if (is_payment)
      message = await ctx.telegram
        .sendPhoto(process.env.ADMIN_ID, reciept_photo_id, {
          parse_mode: "HTML",
          reply_markup: keyboard,
          caption: title,
        })
        .catch((e) => {
          console.log(e);
        });
    else
      message = await ctx.telegram
        .sendMessage(process.env.ADMIN_ID, title, {
          reply_markup: keyboard,
          parse_mode: "HTML",
        })
        .catch((e) => {
          console.log(e);
        });
  else if (is_payment)
    message = await ctx.telegram
      .editMessageMedia(
        process.env.ADMIN_ID,
        last_message_id,
        null,
        {
          type: "photo",
          media: reciept_photo_id,
          caption: title,
          parse_mode: "HTML",
        },
        {
          reply_markup: keyboard,
        }
      )
      .catch((e) => {
        console.log(e);
      });
  else
    message = await ctx.telegram
      .editMessageText(process.env.ADMIN_ID, last_message_id, null, title, {
        reply_markup: keyboard,
        parse_mode: "HTML",
      })
      .catch((e) => {
        console.log(e);
      });

  console.log("upd6");

  if (is_payment && !edit) {
    await ctx.telegram
      .deleteMessage(ctx.chat.id, last_message_id)
      .catch((e) => console.log(e));
  }

  if (!edit) {
    const connection = await tOrmCon;
    await connection
      .query("update orders set last_message_id = $1 where id = $2", [
        message?.message_id,
        id,
      ])
      .catch((e) => console.log(e));
  }
};
