const { Markup } = require("telegraf");

const callbackButton = Markup.button.callback;
const urlButton = Markup.button.url;
const webAppButton = Markup.button.webApp;
const { inlineKeyboard } = Markup;
const moment = require("moment");
const { stat } = require("fs");

exports.agree_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("AGREE_BUTTON"), "agree")]);

exports.main_admin_keyboard = (ctx) =>
  inlineKeyboard([
    callbackButton(ctx.getTitle("AGREE_BUTTON"), "agree"),
    callbackButton(ctx.getTitle("ADMIN_MENU_BUTTON"), "admin"),
  ]);
exports.yes_no_keyboard = (ctx) =>
  inlineKeyboard([
    [callbackButton(ctx.getTitle("Да"), "yes")],
    [callbackButton(ctx.getTitle("Нет"), "no")],
  ]);

exports.webapp_keyboard = (ctx, id) =>
  inlineKeyboard([
    [
      webAppButton(
        ctx.getTitle("WEBAPP_INLINE_BUTTON"),
        "https://92.255.79.59/colorsfront/categories/" + id
      ),
    ],
  ]);

exports.basket_keyboard = (ctx, id) =>
  inlineKeyboard([
    [
      webAppButton(
        ctx.getTitle("BASKET_INLINE_BUTTON"),
        "https://92.255.79.59/colorsfront/basket/" + id
      ),
    ],
    [callbackButton(ctx.getTitle("BACK_BUTTON"), "go_back")],
  ]);

exports.chat_keyboard = (ctx, id) =>
  inlineKeyboard([
    [urlButton(ctx.getTitle("GO_TO_CHAT_BUTTON"), "t.me/foto_desire")],
  ]);

exports.confirm_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("BUTTON_CONFIRM"), "confirm")]);

exports.custom_keyboard = (ctx, bNames, bLinks) => {
  let k = inlineKeyboard([]);

  if (bNames.length != bLinks.length) return k;

  bNames.forEach((name, id) => {
    k.reply_markup.inline_keyboard.push([
      callbackButton(ctx.getTitle(name), bLinks[id]),
    ]);
  });

  return k;
};

exports.custom_obj_keyboard = (ctx, bNamesObj) => {
  let k = inlineKeyboard([], { columns: 3 }).resize();

  Object.entries(bNamesObj)?.forEach(([name, link], i) => {
    // console.log(name, link)
    if (i % 2 === 0)
      k.reply_markup.inline_keyboard.push([
        callbackButton(ctx.getTitle(name), link),
      ]);
    else
      k.reply_markup.inline_keyboard[
        k.reply_markup.inline_keyboard.length - 1
      ].push(callbackButton(ctx.getTitle(name), link));
  });

  return k.resize();
};

exports.password_actions_keyboard = (ctx) =>
  inlineKeyboard([callbackButton("Сменить пароль", "change_password")]);

exports.new_appointment_keyboard = (ctx) =>
  inlineKeyboard(
    [callbackButton("Заполнить новую заявку", "new_appointment")],
    {
      columns: 1,
    }
  );

exports.finish_send_keyboard = (ctx) =>
  inlineKeyboard(
    [
      callbackButton("Отправить объявление", "send"),
      callbackButton("Изменить поле имя", "name"),
      //callbackButton("Изменить контакты", "contacts"),
      callbackButton("Изменить поле откуда", "send_from"),
      callbackButton("Изменить поле куда", "send_to"),
      callbackButton("Изменить описание", "description"),
      callbackButton("Изменить комментарий", "comment"),
    ],
    { columns: 1 }
  );

exports.finish_delivery_keyboard = (ctx) =>
  inlineKeyboard(
    [
      callbackButton("Отправить объявление", "send"),
      callbackButton("Изменить поле имя", "name"),
      //callbackButton("Изменить контакты", "contacts"),
      callbackButton("Изменить поле откуда", "send_from"),
      callbackButton("Изменить поле куда", "send_to"),
      callbackButton("Изменить дату отправления", "departure_date"),
      callbackButton("Изменить дату возвращения", "departure_date_back"),
      callbackButton("Изменить комментарий", "comment_delivery"),
    ],
    { columns: 1 }
  );

exports.finish_updating_keyboard = (ctx, what_need) =>
  what_need === "send"
    ? inlineKeyboard(
        [
          callbackButton("Сохранить изменения", "send"),
          callbackButton("Изменить поле имя", "name"),
          callbackButton("Изменить г. отпр.", "send_from"),
          callbackButton("Изменить г. приб.", "send_to"),
          callbackButton("Изменить параметры груза", "description"),
          callbackButton("Изменить комментарий", "comment"),
        ],
        { columns: 1 }
      )
    : inlineKeyboard(
        [
          callbackButton("Сохранить изменения", "send"),
          callbackButton("Изменить поле имя", "name"),
          callbackButton("Изменить г. отпр.", "send_from"),
          callbackButton("Изменить г. приб.", "send_to"),
          callbackButton("Изменить дату вылета", "departure_date"),
          callbackButton("Изменить дату возвращения", "departure_date_back"),
          callbackButton("Изменить комментарий", "comment"),
        ],
        { columns: 1 }
      );

exports.update_keyboard = (ctx) => {
  const keyboard = inlineKeyboard(
    [callbackButton(ctx.getTitle("UPDATE_BUTTON"), "reload")],
    { columns: 1 }
  );

  return keyboard;
};

exports.categories_list_admin_keyboard = (
  ctx,
  data,
  prefix,
  cardId,
  offset
) => {
  const keyboard = inlineKeyboard(
    data.map(({ username, id, customer_id, what_need, name }) =>
      callbackButton(
        `Заявка №${id + (what_need === "send" ? " 📦" : " 🧳")} от ${
          name ?? username ?? customer_id
        }`,
        prefix + "-" + id
      )
    ),
    { columns: 1 }
  );

  const p2 =
    prefix === "item" ? "category" : prefix === "subcategory" ? "category" : "";

  console.log(1, p2);

  if (prefix === "item" && !p2)
    keyboard.reply_markup.inline_keyboard.push([
      callbackButton(ctx.getTitle("BUTTON_EDIT"), `edit-${p2}-${cardId}`),
      callbackButton(ctx.getTitle("BUTTON_DELETE"), `delete-${p2}-${cardId}`),
    ]);

  if (prefix === "item" && p2) {
    const b = [];

    if (offset > 0)
      b.push(
        callbackButton(
          ctx.getTitle("BUTTON_PREVIOUS"),
          `get_${cardId}_${Number(offset) - 1}`
        )
      );

    b.push(
      callbackButton(
        ctx.getTitle("BUTTON_NEXT"),
        `get_${cardId}_${Number(offset) + 1}`
      )
    );

    keyboard.reply_markup.inline_keyboard.push(b);
  }

  return keyboard;
};

exports.admins_actions_keyboard = (ctx) => {
  const keyboard = inlineKeyboard(
    [
      callbackButton(ctx.getTitle("BUTTON_ADD_ADMIN"), "addAdmin"),
      callbackButton(ctx.getTitle("BUTTON_DELETE_ADMIN"), "deleteAdmin"),
    ],
    { columns: 2 }
  );

  return keyboard;
};

exports.change_text_actions_keyboard = (ctx) => {
  const keyboard = inlineKeyboard(
    [
      callbackButton("AGREE_TITLE", "change_AGREE_TITLE"),
      callbackButton("AGREE_BUTTON", "change_AGREE_BUTTON"),
      callbackButton("QUESTION_1", "change_QUESTION_1"),
      callbackButton("WEBAPP_TITLE", "change_WEBAPP_TITLE"),
      callbackButton("ABOUT_TITLE", "change_ABOUT_TITLE"),
      callbackButton("WEBAPP_BUTTON", "change_WEBAPP_BUTTON"),
      callbackButton("ANSWER_1_1", "change_ANSWER_1_1"),
      callbackButton("ANSWER_1_2", "change_ANSWER_1_2"),
      callbackButton("ANSWER_1_3", "change_ANSWER_1_3"),
      callbackButton("ANSWER_1_4", "change_ANSWER_1_4"),
      callbackButton("ANSWER_1_5", "change_ANSWER_1_5"),
      callbackButton("ANSWER_SKIP", "change_ANSWER_SKIP"),
      callbackButton("ENTER_RIGHT_COMMAND", "change_ENTER_RIGHT_COMMAND"),
      callbackButton("ITEM_INFO_TITLE", "change_ITEM_INFO_TITLE"),
      callbackButton("USE_CURRENT_PHONE", "change_USE_CURRENT_PHONE"),
      callbackButton("SEND_PHONE", "change_SEND_PHONE"),
      callbackButton("APPOINTMENT_SENT", "change_APPOINTMENT_SENT"),
      callbackButton("PD_SUCCESS", "change_PD_SUCCESS"),
      callbackButton("PRESENTATION_SUCCESS", "change_PRESENTATION_SUCCESS"),
    ],
    { columns: 1 }
  );

  return keyboard;
};

exports.admins_list_keyboard = (ctx, admins) => {
  const keyboard = inlineKeyboard(
    admins.map(({ user_id }) => callbackButton(user_id, "admin-" + user_id)),
    { columns: 2 }
  );

  return keyboard;
};

exports.orders_list_keyboard = (ctx, orders) => {
  const keyboard = inlineKeyboard(
    orders.map(({ id, creation_date, status }) =>
      callbackButton(
        status === "basket"
          ? "Корзина"
          : `${status} от ${moment(creation_date).format("DD.MM.YYYY")}`,
        "order-" + id
      )
    ),
    { columns: 1 }
  );

  return keyboard;
};

exports.add_delete_keyboard = (ctx) => {
  const keyboard = inlineKeyboard(
    [callbackButton("ADD", "add"), callbackButton("DELETE", "delete")],
    { columns: 2 }
  );

  return keyboard;
};

exports.skip_keyboard = (ctx) => this.custom_keyboard(ctx, ["SKIP"], ["skip"]);

exports.skip_previous_keyboard = (ctx) =>
  inlineKeyboard(
    [
      callbackButton(ctx.getTitle("BUTTON_PREVIOUS"), "previous_step"),
      callbackButton(ctx.getTitle("BUTTON_SKIP"), "skip"),
    ],
    { columns: 2 }
  );

exports.confirm_cancel_keyboard = (ctx) =>
  inlineKeyboard(
    [
      callbackButton(ctx.getTitle("BUTTON_CONFIRM"), "confirm"),
      callbackButton(ctx.getTitle("BUTTON_CANCEL"), "cancel"),
    ],
    { columns: 1 }
  );

exports.wa_keyboard = (ctx, id) => {
  const keyboard = inlineKeyboard(
    [
      callbackButton(ctx.getTitle("APROOVE_BUTTON"), "aproove-" + id),
      callbackButton(ctx.getTitle("REJECT_BUTTON"), "reject-" + id),
      callbackButton(ctx.getTitle("EDIT_BUTTON"), "edit-" + id),
    ],
    { columns: 2 }
  );

  return keyboard;
};

exports.payment_keyboard = (ctx, paymentLink) =>
  inlineKeyboard(
    paymentLink
      ? [
          [urlButton("Оплатить", paymentLink)],
          [callbackButton(ctx.getTitle("BACK_BUTTON"), "go_back")],
        ]
      : [[callbackButton(ctx.getTitle("BACK_BUTTON"), "go_back")]]
  );

exports.go_back_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("BACK_BUTTON"), "go_back")]);

exports.skip_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("BUTTON_SKIP"), "skip")]);

exports.cancel_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("BUTTON_CANCEL"), "cancel")]);

exports.confirm_keyboard = (ctx) =>
  inlineKeyboard([callbackButton(ctx.getTitle("BUTTON_CONFIRM"), "confirm")]);
