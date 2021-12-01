var Auto = require('../models/auto.js');

function guardar(req, res){
    try {
        let auto = new Auto()
        auto.patente = req.body.patente
        auto.anio = req.body.anio
        auto.marca = req.body.marca

        auto.save((err, autostore) => {
            if (err){
                return res.status(400).send({msg: `Error al intentar guardar en la base de datos > ${err}`})
            }
            res.status(200).send({auto: autostore})
        })
        
    } catch (error) {
        res.status(500).send({msg: `error: ${error}`})
    }    
}

function listar(req, res){
    Auto.find({}, (err, autos) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar la peticion'})
        }
        res.status(200).send({ autos })
    })
}

function recuperar(req, res){
    let idauto = req.params.id
    Auto.findById(idauto, (err, auto) => {
        if (err){
            return res.status(500).send({msg: 'error al realizar peticion'})
        }
        if (!auto){
            return res.status(400).send({msg: 'error, el auto no existe'})
        }
        res.status(200).send({auto})
    })
}

function eliminar(req, res){
    let idauto = req.params.id
    Auto.findByIdAndDelete(idauto, (err, auto) => {
        if (err){
            return res.status(500).send({msg: 'error al eliminar el libro'})
        }
        if (!auto){
            return res.status(400).send({msg: 'error, el libro no existe'})
        }
        res.status(200).send({auto})
    })
}

module.exports = {
    guardar,
    listar,
    recuperar,
    eliminar
};