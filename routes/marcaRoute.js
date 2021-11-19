'use strict'

var express = require('express');


var marcaController = require('../controllers/marcaController');


var api = express.Router();

api.post('/marcas', marcaController.guardar);
api.get('/marcas', marcaController.listar);
api.get('/marca/:id', marcaController.recuperar);
api.delete('/marca/:id', marcaController.eliminar);
module.exports = api;