'use strict'

var express = require('express');


var autoController = require('../controllers/autoController');


var api = express.Router();

api.post('/autos', autoController.guardar);
api.get('/autos', autoController.listar);
api.get('/auto/:id', autoController.recuperar);
api.delete('/auto/:id', autoController.eliminar);
module.exports = api;