var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "OrderItem",
  tableName: "order_items",
  columns: {
    item_option_id: {
      primary: true,
      type: "bigint",
      nullable: false,
    },
    order_id: {
      primary: true,
      type: "bigint",
      nullable: false,
    },
    count: {
      type: "int",
      nullable: false,
    },
  },
  relations: {
    item_option: {
      target: "ItemOption",
      type: "many-to-one",
      joinColumn: true,
      cascade: false,
    },
    order: {
      target: "Order",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
