const {Schema, model} = require('mongoose');


const ArticuloSchema = Schema({
    titulo: {
        type: String,
        require: true
    },    
    contenido: {
        type: String,
        require: true,
    },
    fecha: {
        type: Date,
        Default: Date.now,
    },    
    imagen: {
        type: String,
        dafault: "dafault.png"
    }
})

module.exports = model('Articulo', ArticuloSchema, 'articulos');