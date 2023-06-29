require("dotenv").config();
const moment = require("moment");

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
  } = orderData;

  const statuses = [
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
      ?.map((el) => (el.id ? `📦 ${el.title} - ${el.count} (шт.)` : ""))
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
    delivery_price ? `${delivery_price} руб.` : "Не учтена",
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

  if (!edit)
    if (is_payment)
      await ctx.telegram
        .sendPhoto(process.env.ADMIN_ID, reciept_photo_id, {
          parse_mode: "HTML",
          reply_markup: keyboard,
          caption: title,
        })
        .catch((e) => {
          console.log(e);
        });
    else
      await ctx.telegram
        .sendMessage(process.env.ADMIN_ID, title, {
          reply_markup: keyboard,
          parse_mode: "HTML",
        })
        .catch((e) => {
          console.log(e);
        });
  else if (is_payment)
    await ctx
      .editMessageMedia(
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
        ctx.answerCbQuery().catch((e) => {});
      });
  else
    ctx
      .editMessageText(title, { reply_markup: keyboard, parse_mode: "HTML" })
      .catch((e) => {
        console.log(e);
        ctx.answerCbQuery().catch((e) => {});
      });
};
