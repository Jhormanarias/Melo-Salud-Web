const express = require('express')
const router = express.Router()

// const authcontroller = require('../controllers/AuthControllers')

//router par alas vistas
router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/add', (req, res)=>{
    res.render('addPersonal')
})

router.get('/login', (req, res)=>{
    res.render('login')
})


//router para el controller
/* router.post('/add', authcontroller.add) */

module.exports = router