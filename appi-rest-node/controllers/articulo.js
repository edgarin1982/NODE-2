const validator = require("validator");
const Articulo = require("../models/Articulo");

const test = (req, res) => {
    return res.status(200).json({
        mensaje: 'Soy una acción de prueba en mi controlador de articulos'
    })
}

const curso = (req, res) => {
    console.log("Se ha ejecutado la ruta");

    return res.status(200).json({
        curso: 'Aprendiendo Node',
        autor: 'Edgar Juarez',
        url: 'edgarjuarezweb.com.mx'  

})
};

const crear = (req, res) =>{

    //recoger parametros por post a guardar
    let parametros = req.body;
    //validar datos
    try {

        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
                              validator.isLength(parametros.titulo,{min: 0, max: undefined});
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        if (!validar_titulo || !validar_contenido) {
            throw new Error("No se ha validado la informacion !!");
            
        }
    } catch (error) {
        return res.status(400).json({
            status:"error",
            mensaje: "Faltan datos por enviar",
        })
    }

    //crear el objeto guardar
    const articulo = new Articulo(parametros);


    //asignar valores a objetos basado en el modelo
    

    //guardar el articulo en l abase de datos
    articulo.save((error, articuloGuardado) =>{
        if (error || !articuloGuardado) {
            return res.status(400).json({
                status:"error",
                mensaje: "No se ha guardado el articulo"
            });
            
        }
        return res.status(400).json({
            status:"error",
            mensaje: "Faltan datos por enviar",
        })

    })
    //devolver resultado
    
    return res.status(200).json({
        status: 'success',
        articulo: articuloGuardado,
        mensaje: "Articulo guardado con exito!!"
        
    })
}

module.exports = {
    test, 
    curso,
    crear,
}