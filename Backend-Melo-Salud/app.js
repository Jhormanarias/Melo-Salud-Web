//invocamos a express
const express = require('express')


//objeto de la aplicacion
const app = express(); // instacia del objeto express
 //prevenir el error cors de las cabeceras
// seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}));
app.use(express.json()); //activamos uso de json

//invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({patch: './env/.env'})

app.use('/', require('./routes/router'))

//directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'))

//activamos node en el puerto
app.listen("4000", (req, res) => {
  console.log("servidor funcionando en http://localhost:4000");
});

