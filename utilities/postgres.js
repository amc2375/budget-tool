const pgp = require("pg-promise")(/*initOptions*/);

const conn = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: false
};

export const db = pgp(conn);
