// https://www.codeoftheprogrammer.com/2020/01/16/postgresql-from-nextjs-api-route/
const pgp = require("pg-promise")(/*initOptions*/);


const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

// Use a symbol to store a global instance of a connection, and to access it from the singleton.
const DB_KEY = Symbol.for("budget-tool");
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = (globalSymbols.indexOf(DB_KEY) > -1);
if (!hasDb) {
    global[DB_KEY] = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`);
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
