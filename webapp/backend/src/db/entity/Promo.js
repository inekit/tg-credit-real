var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Promo",
  tableName: "promos",
  columns: {
    code: {
      primary: true,
      type: "varchar",
      length: 40,
      nullable: false,
    },
    type: {
      type: "enum",
      enum: ["money", "procent"],
      nullable: false,
    },
    is_permanent: {
      type: "boolean",
      nullable: false,
      default: false,
    },
    count: {
      type: "int",
      nullable: false,
      default: 1,
    },
    sum: {
      type: "int",
      nullable: false,
    },
  },
});
