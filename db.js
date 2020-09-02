/** Database for lunchly */

// const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

// db.connect();

// module.exports = db;


const { Client } = require("pg");

let data;

if (process.env.NODE_ENV === "test") {
  data = "lunchly_test";
} else {
  data = "lunchly";
}

let db = new Client({
  database: data,
});

db.connect();

module.exports = db;