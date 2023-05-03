var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Order",
  tableName: "orders",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    user_id: {
      type: "bigint",
      nullable: true,
    },
    creation_date: {
      createDate: true,
    },
    status: {
      type: "enum",
      enum: ["basket", "Новый", "Оплачен", "На доставке", "Доставлен"],
      default: "Новый",
    },
    total: {
      type: "int",
      nullable: true,
    },
    selected_dm: {
      type: "enum",
      enum: ["Я. Доставка", "CДЭК", "Курьер", "Почта РФ"],
      nullable: true,
    },
    selected_po: {
      type: "enum",
      enum: ["Перевод", "Наличные курьеру"],
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
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "set null",
      onUpdate: "cascade",
    },
  },
});
