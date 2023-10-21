import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AP159753123!@#",
  database: "mentor",
});
