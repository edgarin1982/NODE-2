
const {conexion} = require("./database/conexion")
const express = require('express');
const cors = require ('cors');

//inicalizar app
console.log("App de node inicializada");


//conectar ala base de datos
conexion();

//crear servidor NODE

const app = express();
const puerto = 3900;

//configurar Cors
app.use(cors());
//convertir body a objeto js

app.use(express.json())

//crear rutas

//crear serrvidor y escuchar peticiones http
app.listen(puerto, ()=>{
    console.log('Servidor corriendo en el puerto '+ puerto);
})


