const { Markup } = require("telegraf");

exports.main_menu_keyboard = (ctx) => {
  const buttons = [
    [ctx.getTitle("WEBAPP_BUTTON"), ctx.getTitle("ORDERS_BUTTON")],
    [ctx.getTitle("SUPPORT_BUTTON"), ctx.getTitle("CHANNEL_BUTTON")],
    //[ctx.getTitle("ABOUT_BUTTON")],
  ];

  return Markup.keyboard(buttons).resize();
};

exports.custom_bottom_keyboard = (ctx, bNames, columns = 2) => {
  let k = Markup.keyboard([], { columns: 2 }).resize();

  bNames = bNames.reduce((prev, cur, i) => {
    if (i % columns === 0) {
      prev.push([ctx.getTitle(cur)]);
      return prev;
    } else {
      prev[prev.length - 1].push(ctx.getTitle(cur));
      return prev;
    }
  }, []);

  bNames.forEach((name) => {
    k.reply_markup.keyboard.push(name);
  });

  return k;
};

exports.custom_botkeyboard = (ctx, registered) => {
  const buttons = [
    [ctx.getTitle("BUTTON_ORDERS"), ctx.getTitle("BUTTON_CLIENTS")],
    [ctx.getTitle("BUTTON_AGENT_PROFILE")],
    [ctx.getTitle("BUTTON_CHOOSE_ROLE")],
  ];

  return Markup.keyboard(buttons).resize();
};

exports.main_menu_admin_keyboard = (ctx) => {
  const buttons = [[ctx.getTitle("BUTTON_BACK_ADMIN")]];

  return Markup.keyboard(buttons).resize();
};

exports.admin_keyboard = (ctx) =>
  Markup.keyboard([
    [ctx.getTitle("BUTTON_IMPORT"), ctx.getTitle("BUTTON_EXPORT_LEADS")],
    [ctx.getTitle("BUTTON_CHANGE_TEXTS"), ctx.getTitle("BUTTON_ADMINS")],
    [ctx.getTitle("BUTTON_CLIENT_MENU")],
  ]).resize();

exports.dialogs_keyboard = (ctx, data) => {
  const categoryButtons = data?.map(({ username, text, appointment_id }) => {
    return [`@${username} (№${appointment_id}) - ${text ?? "Нет сообщений"}`];
  });

  categoryButtons?.push([ctx.getTitle("BUTTON_BACK_USER")]);

  return Markup.keyboard(categoryButtons).resize();
};

exports.main_menu_goback_tasks_keyboard = (ctx) =>
  Markup.keyboard(
    [ctx.getTitle("BUTTON_GO_BACK_TASKS"), ctx.getTitle("BUTTON_BACK_USER")],
    { columns: 1 }
  ).resize();

exports.dialog_keyboard = (ctx) =>
  Markup.keyboard([ctx.getTitle("BUTTON_BACK")]).resize();

exports.dialog_a_keyboard = (ctx) =>
  Markup.keyboard([ctx.getTitle("BUTTON_BACK_BACK")]).resize();

exports.main_menu_back_keyboard = (ctx) =>
  Markup.keyboard([ctx.getTitle("BUTTON_BACK_USER")]).resize();

exports.alpinist_back_keyboard = (ctx) =>
  Markup.keyboard([ctx.getTitle("BUTTON_BACK_ALPINIST")]).resize();

exports.admin_back_keyboard = (ctx) =>
  Markup.keyboard([ctx.getTitle("BUTTON_BACK_ADMIN")]).resize();

exports.remove_keyboard = () => Markup.removeKeyboard();
