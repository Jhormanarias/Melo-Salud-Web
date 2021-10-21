const { Router } = require("express");
const mysql = require("mysql");

//parametros de conexion
let conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_melosalud',
});

conexion.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("conexion exitosa");
  }
});

module.exports = conexion