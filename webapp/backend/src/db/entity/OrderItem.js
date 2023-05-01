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
    id: {
      primary: true,
      type: "int",
      generated: true,
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
      cascade: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    order: {
      target: "Order",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  },
});
