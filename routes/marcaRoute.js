'use strict'

var express = require('express');


var marcaController = require('../controllers/marcaController');


var api = express.Router();

api.post('/libros', marcaController.guardar);
api.get('/libros', marcaController.listar);
api.get('/libro/:id', marcaController.recuperar);
api.delete('/libro/:id', marcaController.eliminar);
module.exports = api;