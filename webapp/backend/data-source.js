const process = require("node:process");
require("dotenv").config();
const { SnakeNamingStrategy } = require("typeorm-naming-strategies");

const Item = require("./src/db/entity/Item");
const Admin = require("./src/db/entity/Admin");
const Category = require("./src/db/entity/Category");
const Tag = require("./src/db/entity/Tag");
const Static = require("./src/db/entity/Static");
const Session = require("./src/db/entity/Session");
const User = require("./src/db/entity/User");
const Favorite = require("./src/db/entity/Favorite");
const Order = require("./src/db/entity/Order");
const OrderItem = require("./src/db/entity/OrderItem");
const ItemOption = require("./src/db/entity/ItemOption");
const Promo = require("./src/db/entity/Promo");
const UserPromo = require("./src/db/entity/UserPromo");

const { DataSource } = require("typeorm");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [
    User,
    Admin,
    Item,
    Session,
    Favorite,
    Static,
    Tag,
    Category,
    Order,
    OrderItem,
    ItemOption,
    Promo,
    UserPromo,
  ],
  synchronize: true,
  migrationsTableName: "custom_migration_table",
  migrations: ["./src/db/migrations/*.js"],
  cli: {
    migrationsDir: "./src/db/migrations",
  },
  migrationsDir: "./src/db/migrations",
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
});

module.exports.AppDataSource = AppDataSource;
