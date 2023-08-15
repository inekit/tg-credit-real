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
      enum: [
        "basket",
        "Новый",
        "Оплачен",
        "На доставке",
        "Доставлен",
        "Доставляется",
        "В обработке",
        "Завершен",
        "Отменен",
      ],
      default: "Новый",
    },
    total: {
      type: "int",
      nullable: true,
    },
    selected_dm: {
      type: "enum",
      enum: [
        "Я. Доставка",
        "Яндекс Доставка",
        "Почта России",
        "CДЭК",
        "Курьер",
        "Почта РФ",
        "Метро",
        "Внутри МКАД",
        "МО за МКАД",
        "До станции метро",
        "Яндекс Доставка до пункта выдачи",
      ],
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
    postal_code: {
      type: "int",
      nullable: true,
    },
    promo_code: { type: "varchar", length: 255, nullable: true },
    phone: {
      type: "varchar",
      length: 45,
      nullable: true,
    },
    reciept_photo_id: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    comment: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    delivery_price: {
      type: "int",
      nullable: true,
    },
    last_message_id: {
      type: "bigint",
      nullable: true,
    },
    client_message_id: {
      type: "bigint",
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
