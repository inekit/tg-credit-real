var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Session",
  tableName: "session",
  columns: {
    sid: {
      type: "varchar",
      length: 255,
      primary: true,
    },
    expire: {
      type: "date",
    },
    sess: {
      type: "varchar",
      length: 255,
    },
  },
});
