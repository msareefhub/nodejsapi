import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE_NAME,
});
