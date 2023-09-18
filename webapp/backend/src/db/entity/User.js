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
    phone: {
      type: "varchar",
      length: 45,
      nullable: true,
    },
    birth_date: {
      type: "date",
      nullable: true,
    },
    passport_photo: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    visa_photo: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    visa_expired_date: {
      type: "date",
      nullable: true,
    },
    verification_date: {
      type: "date",
      nullable: true,
    },
    atm: {
      type: "enum",
      enum: [
        "Любой банкомат",
        "Личная встреча",
        "Банкомат Bangkok Bank",
        "Банкомат Kungsri",
        "Банкомат SCB",
        "Банкомат Kasikorn",
        "Банкомат Krungthai",
        "Банковский перевод (Таиланд)",
      ],
      nullable: false,
    },
    return_method: {
      type: "enum",
      enum: ["Тиньков", "Сбербанк", "Перевод по номеру счета"],
      nullable: false,
    },
    ban: {
      type: "boolean",
      nullable: false,
      default: false,
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
