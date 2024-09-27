const Adoptante = require ("../models/clienteModel");

const obtenerAdoptante = async (req, res) => {
    try{
        const adoptante = await Adoptante.find();
        res.json(adoptante);
    } catch(e){
        res.status(500).json({mensaje: "Error al obtener el adoptante"})
    }
}

const agregarAdoptante = async (req, res) =>{
    try {
        const {nombre, correo, direccion} = req.body;
        const nuevoDato = new Client({nombre, correo, direccion});
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al crear adoptante"})
    }
}

const actualizarAdoptante = async (req, res) => {
    try{
        let {id} = req.params;
        let {nombre, correo, direccion} = req.body
        if (!nombre || !correo || !direccion){
            return res.json({mensaje: "los espacios están vacíos"})
        }
        else{
            let adotanteActualizado = await Client.findByIdAndUpdate(id,{nombre, correo, direccion})
            return res.json({mensaje:"adoptante actulizado", adotanteActualizado})
        }
    }catch (e){
        res.json({mensaje:"Error al actualizar adoptante"})
    }
}

const eliminarAdoptante = async (req, res) =>{
    try{
        let {id} = req.params;
        let eliminarAdoptante = await Client.findByIdAndDelete(id);
        if(!eliminarAdoptante){
            return res.json({mensaje: "Id no existe"})
        }else{
            res.json ({mensaje: "Adoptante eliminardo", eliminarAdoptante})
        }
    }catch (e){
        res.json ({mensaje: "Error en el metodo eliminar adoptante"})
    }
}
module.exports = {obtenerAdoptante, agregarAdoptante, actualizarAdoptante, eliminarAdoptante}