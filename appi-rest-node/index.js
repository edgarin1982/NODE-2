
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


//rutas
const rutas_articulo = require('./routes/articulo')

//cargo las rutas
app.use('/api', rutas_articulo)


//rutas pruebas hardcodeadas

app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado la ruta");

    return res.status(200).json({
        curso: 'Aprendiendo Node',
        autor: 'Edgar Juarez',
        url: 'edgarjuarezweb.com.mx'  

})
})
app.get("/", (req, res) => {
    console.log("Se ha ejecutado la ruta principal");

    return res.status(200).send(
        '<p>Huevos a todos</p>'
)
})

//crear servidor y escuchar peticiones http
app.listen(puerto, ()=>{
    console.log('Servidor corriendo en el puerto '+ puerto);
})


