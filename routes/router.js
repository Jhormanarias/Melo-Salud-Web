const express = require('express');
const router = express.Router();
const cors = require('cors');
const conexion = require('../database/db');
router.use(cors());
router.use(express.json());

const authController = require('../controllers/AuthControllers')

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/add', authController.isAuthenticated,(req, res)=>{
    res.render('addPersonal', {user:req.user})
})

router.get('/Editt', authController.isAuthenticated,(req, res)=>{
    res.render('EditHorarios', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})

//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

//Ver datos
router.get('/', (req,res)=>{
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
router.get('/:especialidad', authController.isAuthenticated, (req, res) => {
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
router.post('/add',authController.isAuthenticated,(req,res)=>{
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

//Actualizar datos
router.put('/api/EditPersonal/:id', function(req,res){
    //Variables para mandar datos
    let id = req.params.id;
    let fecha_inicio = req.body.fecha_inicio;
    let fecha_fin = req.body.fecha_fin;
    let turno = req.body.turno;
    //Consulta
    conexion.query("UPDATE datos_personal SET fecha_inicio = ?, fecha_fin = ?, turno = ? where id = ?",[fecha_inicio,fecha_fin,turno,id],
    function(error,datos){
        if (error) {
            throw error;
        }
        else{
            res.send(datos);
        }
    })
})

module.exports = router