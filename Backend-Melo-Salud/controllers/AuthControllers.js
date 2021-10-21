const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

//procedimiento o metodo par registrar personal
/* exports.add = async (req, res) =>{
    try{
        let cedula = req.body.cedula
        let name = req.body.name
        let apellido = req.body.apellido
        conexion.query('INSERT INTO bd_melosalud SET ?', {nit:cedula, nombre:name, apellido:apellido}, (error, results)=>{
            if(error){console.log(error)}
                res.redirect('/add')
        })
    } catch (error) {
        console.log(error)
    }
} */

