const pgp = require("pg-promise")(/*initOptions*/);

const conn = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
};

const db = pgp(conn);

module.exports = {
  db,
  pgp,
};