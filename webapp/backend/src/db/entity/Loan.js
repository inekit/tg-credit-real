var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Loan",
  tableName: "loans",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    user_id: {
      type: "bigint",
      nullable: false,
    },
    creation_date: {
      createDate: true,
    },
    status: {
      type: "enum",
      enum: [
        "Новый",
        "Выдан",
        "Получен",
        "Отменен",
        "Запрещен",
        "На возврате",
        "Закрыт",
      ],
      default: "Новый",
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
    term_days: {
      type: "int",
      nullable: false,
    },
    sum: {
      type: "int",
      nullable: false,
    },
    return_sum: {
      type: "int",
      nullable: false,
    },
    issue_date: {
      type: "date",
      nullable: true,
    },
    return_date: {
      type: "date",
      nullable: true,
    },
    assessment: {
      type: "int",
      nullable: true,
    },
    country: {
      type: "enum",
      enum: ["Тайланд"],
      default: "Тайланд",
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
      default: "Любой банкомат",
      nullable: false,
    },
    return_method: {
      type: "enum",
      enum: ["Тиньков", "Сбербанк", "Перевод по номеру счета"],
      default: "Тиньков",
      nullable: false,
    },
    aprooved_by_id: { type: "bigint", nullable: true },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "set null",
      onUpdate: "cascade",
    },
    aprooved_by: {
      target: "Admin",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "set null",
      onUpdate: "cascade",
    },
  },
});
