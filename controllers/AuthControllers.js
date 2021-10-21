const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");

//procedimiento o metodo par registrar personal
exports.add = async (req, res) => {
  try {
    let datos = {
      nit: req.body.numeroCedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      especialidad_idespecialidad: req.body.especialidad
    };
    conexion.query(
      "INSERT INTO personal_salud SET ?",
      datos,
      (error, results) => {
        if (error) {console.log(error)}
        res.redirect("/add");
      });
  } catch (error) {
    console.log(error);
  }
};
