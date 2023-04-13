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
    is_backside: {
      primary: true,
      type: "boolean",
      default: false,
    },
    order_id: {
      primary: true,
      type: "bigint",
      nullable: false,
    },
    backside_of_id: {
      primary: true,
      type: "bigint",
      nullable: true,
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
    backside_of: {
      target: "ItemOption",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
    },
  },
});
