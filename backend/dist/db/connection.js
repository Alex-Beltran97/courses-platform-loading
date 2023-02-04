"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const dbCredentials = {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
};
const db = new sequelize_1.Sequelize(dbCredentials.dbName, dbCredentials.dbUser, dbCredentials.dbPassword, {
    host: "localhost",
    dialect: "mysql"
});
exports.default = db;
//# sourceMappingURL=connection.js.map