const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

// let connection = mysql.createConnection({
//   host: "localhost",
//   port: process.env.MYSQL_PORT,
//   user: "root",
//   password: "",
//   database: "trainlk",
// });

let connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  port: process.env.MYSQL_PORT,
  user: "sql6518660",
  password: "YW7SiN4TrL",
  database: "sql6518660",
});

// let connection = mysql.createConnection({
//   host: "trainlk-db-server.mysql.database.azure.com",
//   port: process.env.MYSQL_PORT,
//   user: "trainlk@trainlk-db-server",
//   password: "train-lk@123",
//   database: "trainlk",
// });

connection.connect((err) => {
  if (err) {
    console.log("Error occurred ", err);
  } else {
    console.log("Connected to mysql database");
  }
});

const query = util.promisify(connection.query).bind(connection);

module.exports = { connection, query };
