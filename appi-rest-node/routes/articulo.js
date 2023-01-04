const express = require('express')
const router = express.Router();
const ArticuloController = require('../controllers/articulo');


//rutas de pruebas
router.get('/ruta-de-prueba', ArticuloController.test);
router.get('/curso', ArticuloController.curso);


module.exports = router;
