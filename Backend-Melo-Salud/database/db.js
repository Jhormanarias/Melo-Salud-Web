const { Router } = require("express");
const mysql = require("mysql");

//parametros de conexion
let conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_DATABASE,
});

conexion.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("conexion exitosa");
  }
});

module.exports = conexion