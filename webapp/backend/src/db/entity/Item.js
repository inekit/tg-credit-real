var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Item",
  tableName: "items",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "varchar",
      length: 255,
      nullable: false,
      default: "Описание",
    },
    image_list: {
      type: "varchar",
      array: true,
      length: 300,
      nullable: true,
    },
    publication_date: {
      createDate: true,
    },
    category_name: {
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
    },
    tags: {
      target: "Tag",
      type: "many-to-many",
      joinTable: true,
      cascade: false,
    },
  },
});
