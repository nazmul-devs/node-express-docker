import express from "express";
import mysql from "mysql2";
const port = 5000;
const app = express();

/* const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "123456",
  database: "my_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
}); */

app.get("/", (req, res) => {
  res.send("<h3>How are you?</h3>");
});

app.listen(port, () => {
  console.log(`listining on localhost:${port}`);
});
