const express = require('express')
const router = express.Router();
const ArticuloController = require('../controllers/articulo');


//rutas de pruebas
router.get('/ruta-de-prueba', ArticuloController.test);
router.get('/curso', ArticuloController.curso);

//ruta util
router.post('/crear', ArticuloController.crear);
router.get("/articulos/:ultimos?", ArticuloController.listar)

module.exports = router;
