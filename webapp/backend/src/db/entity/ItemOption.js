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
      default: 1,
    },
    name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    stock: {
      type: "int",
      nullable: false,
      default: 0,
    },
    photos: {
      type: "varchar",
      array: true,
      length: 300,
      nullable: true,
    },
  },
  relations: {
    item: {
      target: "Item",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  },
});
