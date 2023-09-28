// database dbs.js
require('dotenv').config();
const mysql = require('mysql2/promise');

let connection;

const initializeDb = async () => {
  console.log('Connecting to the database...');
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  console.log('Database connection established.');
};

const query = async (sql, params) => {
  return await connection.query(sql, params);
};

module.exports = {
  initializeDb,
  query,
};
