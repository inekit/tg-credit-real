var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "bigint",
    },
    username: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    last_use: {
      type: "date",
      nullable: true,
    },
    name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    surname: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    patronymic: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    address: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    phone: {
      type: "varchar",
      length: 45,
      nullable: true,
    },
  },
  relations: {
    referer: {
      target: "User",
      type: "one-to-many",
      cascade: true,
      joinColumn: true,
      onDelete: "set null",
      onUpdate: "cascade",
    },
  },
});
