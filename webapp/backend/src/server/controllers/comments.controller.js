const tOrmCon = require("../../db/connection");
const servicePreset = require("../services/crud.service").getService(
  "Comment",
  ["postId", "text", "authorId"]
);

function getAll(req, res) {
  servicePreset
    .get(
      req.query.id,
      req.query.page,
      req.query.take,
      { post: { id: req.query.postId } },
      ["author"]
    )
    .then((data) => res.send(data))
    .catch((error) =>
      res.status(404).send({ status: false, error: error.toString() })
    );
}

async function add(req, res) {
  const { comments, postId } = req.body;
  if (!comments || !postId)
    return res.send({ status: false, error: "no comments" });

  const connection = await tOrmCon;

  const queryRunner = connection.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    for (let comment of comments) {
      console.log(comment);

      if (comment.text && comment.nick)
        queryRunner.manager
          .getRepository("Comment")
          .insert({ text: comment.text, nick: comment.nick, postId });
      else throw new Error("no comm data");
    }

    await queryRunner.commitTransaction();
    res.send({ status: true });
  } catch (error) {
    await queryRunner.rollbackTransaction();
    res.status(304).send({ status: false, error: error.toString() });
  } finally {
    await queryRunner.release();
  }
}

function addOne(req, res) {
  const { text, postId } = req.body;
  const authorId = req.session.passport.user.toString();

  addService({ text, postId, authorId });
}

function addService(queryData) {
  servicePreset
    .add(queryData)
    .then((data) => res.send({ status: true }))
    .catch((error) =>
      res.status(304).send({ status: false, error: error.toString() })
    );
}

function editOne(req, res) {
  servicePreset
    .edit({
      text: req.body.text,
      postId: req.body.postId,
      id: req.body.id,
    })
    .then((data) => res.send({ status: true }))
    .catch((error) =>
      res.status(304).send({ status: false, error: error.toString() })
    );
}

function deleteOne(req, res) {
  servicePreset
    .delete({ id: req.body.id })
    .then((data) => res.send({ status: true }))
    .catch((error) =>
      res.status(304).send({ status: false, error: error.toString() })
    );
}

module.exports = {
  addOne,
  editOne,
  deleteOne,
  getAll,
  add,
};
