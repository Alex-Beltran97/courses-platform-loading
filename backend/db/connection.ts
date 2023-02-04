import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const dbCredentials = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

const db = new Sequelize(
  dbCredentials.dbName as string,
  dbCredentials.dbUser as string,
  dbCredentials.dbPassword as string,
  {
    host:"localhost",
    dialect:"mysql"
  }
);

export default db;