const process = require("node:process");
require("dotenv").config();
const { SnakeNamingStrategy } = require("typeorm-naming-strategies");

const Admin = require("./src/db/entity/Admin");
const Static = require("./src/db/entity/Static");
const Session = require("./src/db/entity/Session");
const User = require("./src/db/entity/User");
const Loan = require("./src/db/entity/Loan");

const { DataSource } = require("typeorm");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [User, Admin, Session, Static, Loan],
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
