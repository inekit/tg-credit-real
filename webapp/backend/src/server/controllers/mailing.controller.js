const tOrmCon = require("../../db/connection");

function add(ctx) {
  return async (req, res, next) => {
    const { text } = req.body;

    const connection = await tOrmCon;

    const users = [{ id: 296846972 }]; /*await connection
      .query("select id from users")
      .catch((e) => {});*/

    const previewBinary = req.files.preview;

    for (user of users) {
      if (previewBinary)
        await ctx.telegram
          .sendPhoto(
            user.id,
            {
              source: previewBinary,
            },
            {
              caption: text.replaceAll(
                /(\#)|(\.)|(\+)|(\=)|(\-)|(\*)|(\!)|(\?)|(\,)|(\()|(\))|(\%)|(\@)|(\~)|(\;)|(\^)|(\&)|(\")|(\:)|(\')$/g,
                function replacer(match, p1, offset, string) {
                  return `\\${match}`;
                }
              ),
              parse_mode: "MarkdownV2",
              reply_markup: kbs.length
                ? {
                    inline_keyboard: [kbs],
                  }
                : undefined,
            }
          )
          .catch((e) => {
            //console.log(e);
          });
      else
        await ctx.telegram
          .sendMessage(
            user.id,
            text.replaceAll(
              /(\#)|(\.)|(\+)|(\=)|(\-)|(\*)|(\!)|(\?)|(\,)|(\()|(\))|(\%)|(\@)|(\~)|(\;)|(\^)|(\&)|(\")|(\:)|(\')$/g,
              function replacer(match, p1, offset, string) {
                return `\\${match}`;
              }
            ),
            {
              parse_mode: "MarkdownV2",
              reply_markup: kbs.length
                ? {
                    inline_keyboard: [kbs],
                  }
                : undefined,
            }
          )
          .catch((e) => {
            //console.log(e);
          });
      await delay(50);
    }

    res.send({ error: null });
  };
}

module.exports = {
  add,
};
