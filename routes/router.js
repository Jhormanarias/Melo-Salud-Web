const express = require('express');
const router = express.Router();
const cors = require('cors');
const conexion = require('../database/db');
router.use(cors());
router.use(express.json());


router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/add', (req, res)=>{
    res.render('addPersonal')
})

router.get('/Editt', (req, res)=>{
    res.render('EditHorarios')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

//Ver datos
router.get('/api', (req,res)=>{
    //consulta
    conexion.query('SELECT * FROM datos_personal', (error,datos)=>{
        if(error){
            throw error; //El throw tumba la aplicación, el console.log no
        }
        else{
            res.send(datos);
        }
    });
});

//para consultar el personal
router.get('/api/personal/:especialidad', (req, res) => {
    conexion.query('SELECT * FROM datos_personal where especialidad= ?',[req.params.especialidad] ,(error, dato)=> {
        if (error) {
            throw error;
        } else {
            // res.send(dato);
            res.send(dato);
        }
    });
});

//Insertar datos
router.post('/add',(req,res)=>{
    let data = {
        "cedula" : req.body.cedula, 
        "nombre" :req.body.nombre,
        "apellidos" :req.body.apellidos,
        "especialidad" :req.body.especialidad,
        "fecha_inicio" :req.body.fecha_inicio,
        "fecha_fin" :req.body.fecha_fin,
        "turno" :req.body.turno
    };
    let sql = "INSERT INTO datos_personal SET  ?"
    conexion.query(sql,data,(error, resultado)=>{
        if (error) {
            throw error;
        } else {           
            res.send(resultado);
        }

    })
});

module.exports = router