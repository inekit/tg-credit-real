var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Static",
  tableName: "statics",
  columns: {
    id: {
      primary: true,
      type: "int",
      default: 1,
    },
    greeting: {
      type: "varchar",
      primary: false,
      length: 4096,
    },
    order: {
      type: "varchar",
      primary: false,
      length: 1024,
    },
  },
});
