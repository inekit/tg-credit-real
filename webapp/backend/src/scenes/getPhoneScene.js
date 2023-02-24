const {
  Composer,
  Scenes: { BaseScene },
} = require("telegraf");

const scene = new BaseScene("adminScene");
const main_menu_button = "admin_back_keyboard";
const tOrmCon = require("../../db/connection");

scene.enter(async (ctx) => {
  if (!ctx.session.registered) {
    const [{ exists }] = [{ true: 1 }];

    if (!exists) {
    }
  }

  const connection = await tOrmCon;

  await connection
    .query(
      `update dialogs set opened_admin_id = null where opened_admin_id = $1`,
      [ctx.from.id]
    )
    .catch((e) => {});

  return ctx.replyWithKeyboard("CHOOSE_ACTION", "admin_keyboard");
});

scene.action("yes", async (ctx) => {
  ctx.replyWithTitle("APPOINTMENT_SENT");
  const admins = await connection.getRepository("Admin").find();
  for (admin of admins) {
    ctx.telegram.sendMessage(
      admin.user_id,
      ctx.getTitle("NEW_GM_APPOINTMENT", [
        ctx,
        ctx.from.username,
        money_sum,
        payment_type,
      ])
    );
  }
});

scene.hears(titles.getValues("BUTTON_ACCOUNT"), (ctx) =>
  ctx.scene.enter("changePasswordScene", { main_menu_button })
);

scene.hears(titles.getValues("BUTTON_ADMINS"), (ctx) =>
  ctx.scene.enter("adminsScene", { main_menu_button })
);

scene.hears(titles.getValues("BUTTON_APPOINTMENTS"), (ctx) =>
  ctx.scene.enter("appointmentsScene", { main_menu_button, waiting: false })
);
scene.hears(titles.getValues("BUTTON_HISTORY"), (ctx) =>
  ctx.scene.enter("historyScene", { main_menu_button })
);

scene.hears(titles.getValues("BUTTON_SEARCH_A"), (ctx) =>
  ctx.scene.enter("searchDialogScene", {
    main_menu_button,
    mode: "appointment",
  })
);
scene.hears(titles.getValues("BUTTON_SEARCH_U"), (ctx) =>
  ctx.scene.enter("searchDialogScene", { main_menu_button, mode: "username" })
);

scene.hears(titles.getValues("BUTTON_IMPORT"), (ctx) =>
  ctx.scene.enter("importScene", { main_menu_button })
);

scene.hears(titles.getValues("BUTTON_CHANGE_RIGHTS"), (ctx) =>
  ctx.scene.enter("changeRightsScene", { main_menu_button, mode: "username" })
);

module.exports = scene;
