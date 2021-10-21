const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/add', (req, res)=>{
    res.render('addPersonal')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

module.exports = router