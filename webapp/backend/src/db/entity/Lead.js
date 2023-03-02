var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Lead",
  tableName: "leads",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    user_id: {
      type: "bigint",
      nullable: false,
    },
    item_id: {
      type: "int",
      nullable: false,
    },
    question_1: {
      type: "enum",
      enum: ["1", "2", "3", "4", "5", "skip"],
      nullable: false,
      default: "skip",
    },
    phone: {
      type: "varchar",
      length: 45,
      nullable: false,
    },
    datetime_created: {
      type: "timestamp",
      default: () => "NOW()",
    },
  },
  relations: {
    user: {
      target: "User",
      type: "one-to-many",
      cascade: true,
      joinColumn: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    item: {
      target: "Item",
      type: "one-to-many",
      cascade: true,
      joinColumn: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  },
});
