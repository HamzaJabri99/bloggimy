import mysql from "mysql";
export const db = () => {
  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PassWord",
    database: "bloggimy",
  });
};
export default db;