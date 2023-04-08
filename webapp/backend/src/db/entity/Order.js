var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Order",
  tableName: "orders",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    user_id: {
      type: "bigint",
      nullable: false,
    },
    creation_date: {
      createDate: true,
    },
    status: {
      type: "enum",
      enum: ["basket", "created", "payed", "delivery", "delivered"],
      default: "created",
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
