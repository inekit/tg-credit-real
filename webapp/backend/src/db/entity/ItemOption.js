var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "ItemOption",
  tableName: "item_options",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    item_id: {
      type: "bigint",
      nullable: false,
    },
    size: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    material: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    price: {
      type: "int",
      nullable: false,
    },
  },
  relations: {
    item: {
      target: "Item",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "cascade",
    },
  },
});
