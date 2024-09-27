const { Perro } = require ("../models");

const obtenerPerro = async (req, res) => {
    try{
        const perros = await Perro.find();
        res.json(perros);
    } catch(e){
        res.status(500).json({mensaje: "Error al obtener el perro"})
    }
}

const agregarPerro = async (req, res) =>{
    try {
        const {nombre, raza, edad, tamaño} = req.body;
        const nuevoDato = new Auto({nombre, raza, edad, tamaño});
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al agregar perro"})
    }
}

const actualizarPerro = async (req, res) => {
    try{
        let {id} = req.params;
        let {nombre, raza, edad, tamaño} = req.body
        if (!nombre || !raza || !edad || !tamaño){
            return res.json({mensaje: "los espacios están vacíos"})
        }
        else{
            let autoActualizado = await Auto.findByIdAndUpdate(id,{nombre, raza, edad, tamaño})
            return res.json({mensaje:"Perro actulizado", autoActualizado})
        }
    }catch (e){
        res.json({mensaje:"Error al actualizar"})
    }
}

const eliminarPerro = async (req, res) =>{
    try{
        let {id} = req.params;
        let eliminarPerro = await Auto.findByIdAndDelete(id);
        if(!eliminarPerro){
            return res.json({mensaje: "Id no existe"})
        }else{
            res.json ({mensaje: "Perro eliminardo", eliminarPerro})
        }
    }catch (e){
        res.json ({mensaje: "Error en el metodo eliminar perro"})
    }
}
module.exports = {obtenerPerro, agregarPerro, actualizarPerro, eliminarPerro}