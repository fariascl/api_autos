var Marca = require('../models/marca.js');

function guardar(req, res){
    try {
        let marca = new Marca()
        marca.nombre = req.body.nombre

        marca.save((err, marcastore) => {
            if (err){
                return res.status(400).send({msg: `Error al intentar guardar en la base de datos > ${err}`})
            }
            res.status(200).send({marca: marcastore})
        })
        
    } catch (error) {
        res.status(500).send({msg: `error: ${error}`})
    }    
}

function listar(req, res){
    Marca.find({}, (err, marcas) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar la peticion'})
        }
        res.status(200).send({ marcas })
    })
}

function recuperar(req, res){
    let idmarca = req.params.id
    Marca.findById(idmarca, (err, marca) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar peticion'})
        }
        if (!marca){
            return res.status(400).send({msg: 'error, la marca no existe'})
        }
        res.status(200).send({marca})
    })
}

function eliminar(req, res){
    let idmarca = req.params.id
    Marca.findByIdAndDelete(idmarca, (err, marca) => {
        if (err){
            return res.status(500).send({msg: 'error al eliminar el libro'})
        }
        if (!marca){
            return res.status(400).send({msg: 'error, el libro no existe'})
        }
        res.status(200).send({marca})
    })
}

module.exports = {
    guardar,
    listar,
    recuperar,
    eliminar
};