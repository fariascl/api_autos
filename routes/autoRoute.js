'use strict'

var express = require('express');


var autoController = require('../controllers/autoController');


var api = express.Router();

api.post('/libros', autoController.guardar);
api.get('/libros', autoController.listar);
api.get('/libro/:id', autoController.recuperar);
api.delete('/libro/:id', autoController.eliminar);
module.exports = api;