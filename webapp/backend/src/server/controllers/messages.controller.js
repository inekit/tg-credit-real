const tOrmCon = require("../../db/connection");

function addOne(ctx) {
  (req, res, next) => {
    const { text, user_id } = req.body;

    ctx.telegram
      .sendMessage(user_id, text, {
        parse_mode: "HTML",
      })
      .catch((error) => next(error));

    res.send({ error: null });
  };
}

module.exports = {
  addOne,
};
