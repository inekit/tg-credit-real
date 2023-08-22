var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Channel",
  tableName: "channels",
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
    adding_date: {
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
    preview: {
      type: "varchar",
      length: 300,
      nullable: true,
    },
    participants_count: {
      type: "int",
      nullable: false,
      default: 100,
    },
    post_reach: {
      type: "int",
      nullable: false,
      default: 100,
    },
    err: {
      type: "double precision",
      nullable: false,
      default: 100,
    },
    cpm: {
      type: "int",
      nullable: false,
      default: 100,
    },
    man_percent: {
      type: "int",
      nullable: false,
      default: 100,
    },
    age: {
      type: "json",
      default: {},
    },
    tgstat_link: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    telemetr_link: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    tgstat_id: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    prices: {
      type: "json",
      default: {},
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
