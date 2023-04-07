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
    creation_date: {
      createDate: true,
    },
    status: {
      type: "enum",
      enum: ["created", "payed", "delivery", "delivered"],
    },
  },
});
