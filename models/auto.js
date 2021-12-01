'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema // Relación entre BD y objeto que se creará en el código.

// Schema personalizado.
const AutoSchema = Schema(

    /*
        VARIABLES

        nombre: string
        anio: number
        idioma: string enum[‘ING’,’ESP’]
        autor : string

    */

    {
        patente:
        {
            type:String,
            required: true,
        },
        anio:
        {
            type: Number,
            required: true
        },
        marca:
        {
            type: String,
            required: true
        }

    })

module.exports = mongoose.model('autos', AutoSchema)