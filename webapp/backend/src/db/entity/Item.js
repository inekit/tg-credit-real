var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Item",
  tableName: "items",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    title: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "text",
      nullable: false,
      default: " ",
      default: "Описание",
    },
    publication_date: {
      createDate: true,
    },
    category_name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    price: {
      type: "int",
      nullable: false,
      default: 100,
    },
    saleCount: { type: "int", nullable: true },
    salePrice: { type: "int", nullable: true },
    preview: {
      type: "varchar",
      length: 300,
      nullable: true,
    },
    puffs_count: {
      type: "int",
      nullable: false,
      default: 100,
    },
    select_name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
  },
  relations: {
    category: {
      target: "Category",
      type: "many-to-one",
      joinColumn: true,
      cascade: false,
      onDelete: "SET NULL",
      onUpdate: "cascade",
    },
  },
});
