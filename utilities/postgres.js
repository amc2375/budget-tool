// https://www.codeoftheprogrammer.com/2020/01/16/postgresql-from-nextjs-api-route/
const pgp = require("pg-promise")(/*initOptions*/);

let ssl = null;
if (process.env.NODE_ENV === 'development') {
  ssl = false;
} else {
  // https://www.javaniceday.com/post/pg-promise-self-signed-certificate-error-in-postgres
  // https://security.stackexchange.com/questions/229282/is-it-safe-to-set-rejectunauthorized-to-false-when-using-herokus-postgres-datab
  sslmode: 'require',
  ssl = {rejectUnauthorized: false};
}

const config = {
   host: process.env.DB_HOST,
   port: 5432,
   database: process.env.DB_NAME,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   max: 30, // use up to 30 connections
   ssl: ssl
};

// Use a symbol to store a global instance of a connection, and to access it from the singleton.
const DB_KEY = Symbol.for("budget-tool");
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = (globalSymbols.indexOf(DB_KEY) > -1);
if (!hasDb) {
    global[DB_KEY] = pgp(config);
}

// Create and freeze the singleton object so that it has an instance property.
const singleton = {};
Object.defineProperty(singleton, "instance", {
    get: function () {
        return global[DB_KEY];
    }
});

Object.freeze(singleton);

module.exports = singleton;

// Now each API route can use the one instance of the database connection simply by adding the .instance to the require() statement:
// const db = require('./postgres.js').instance;
