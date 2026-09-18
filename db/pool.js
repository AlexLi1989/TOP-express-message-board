const { Pool } = require("pg");

let poolConfig = {};

if (process.env.DB_URL) {
  poolConfig = { connectionString: process.env.DB_URL };
} else {
  poolConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "alex",
    database: process.env.DB_NAME || "top_message_board",
    password: process.env.DB_PASSWORD || "a3191121",
    port: process.env.DB_PORT || 5432,
  };
}

module.exports = new Pool(poolConfig);
