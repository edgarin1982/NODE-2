const mongoose = require("mongoose")
mongoose.set('strictQuery', false);



const conexion = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_blog",{
            useNewUrlParser: true,
                      
        })
        console.log(" Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos")
    }
}

module.exports = {
    conexion
}