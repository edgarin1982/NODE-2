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

module.exports = {
    test, 
    curso
}