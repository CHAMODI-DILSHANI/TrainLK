const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

let connection = mysql.createConnection({
  host: "localhost",
  port: process.env.MYSQL_PORT,
  user: "root",
  password: "",
  database: "trainlk",
});

connection.connect((err) => {
  if (err) {
    console.log("Error occurred ", err);
  } else {
    console.log("Connected to mysql database");
  }
});

const query = util.promisify(connection.query).bind(connection);

module.exports = { connection, query };
