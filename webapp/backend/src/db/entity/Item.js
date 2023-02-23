var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Item",
  tableName: "items",
  columns: {
    id: {
      type: "bigint",
      primary: true,
    },
    city_name: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    developer_name: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    company_name: {
      type: "varchar",
      nullable: true,
      length: 255,
    },
    name: {
      type: "varchar",
      nullable: false,
      length: 512,
    },
    latitude: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    longitude: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    address: {
      type: "varchar",
      nullable: true,
      length: 512,
    },
    metro_1: {
      type: "varchar",
      nullable: true,
      length: 255,
    },
    metro_2: {
      type: "varchar",
      nullable: true,
      length: 255,
    },
    metro_3: {
      type: "varchar",
      nullable: true,
      length: 255,
    },
    declaration: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    commissioning: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    commissioning_year: {
      type: "int",
      nullable: false,
    },
    commissioning_diapason: {
      type: "varchar",
      length: 45,
      nullable: false,
    },
    issuance_date: {
      type: "date",
      nullable: false,
    },
    meter_price: {
      type: "int",
      nullable: true,
    },
    sale_percent: {
      type: "int",
      nullable: false,
    },
    property_class: {
      //type: "varchar",
      type: "enum",
      enum: ["Типовой", "Комфорт", "Элитный", "Бизнес"],
      nullable: false,
    },
    material: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    finish_type: {
      type: "varchar",
      nullable: false,
      length: 255,
    },
    floor_count: {
      type: "int",
      nullable: false,
    },
    apartment_count: {
      type: "int",
      nullable: false,
    },
    square: {
      type: "float",
      nullable: false,
    },
    ceiling_height_min: {
      type: "float",
      nullable: false,
    },
    ceiling_height_max: {
      type: "float",
      nullable: false,
    },
    parking_spaces_count: {
      type: "int",
      nullable: false,
    },
    description: {
      type: "text",
      nullable: true,
      // length: 5000,
    },
    images_count: {
      type: "int",
      nullable: false,
      default: 0,
    },
  },
});
