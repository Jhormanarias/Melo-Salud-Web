const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

//procedimiento o metodo par registrar personal
exports.add = async (req, res) =>{
    try{
        let cedula = req.body.numeroCedula
        let name = req.body.nombre
        let apellido = req.body.Apellidos
        conexion.query('INSERT INTO personal_salud SET ?', {nit:cedula, nombre:name, apellido:apellido}, (error, results)=>{
            if(error){console.log(error)}
                res.redirect('/add')
        })
    } catch (error) {
        console.log(error)
    }
}

