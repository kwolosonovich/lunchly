/** Database for lunchly */

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