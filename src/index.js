'use strict'
/**
 * **********************************
 * API EXPRESS 
 * **********************************
**/


const express = require('express');
const morgan = require('morgan'); // muestras peticiones en consola


// Inicialization 
const app = express();


// settings
app.set('port', process.env.PORT || 54293)

// Middlewares
app.use(morgan('dev'))

// Global variables

// Routes

// Public


// Starting
app.listen(app.get('port'),()=>{
    console.log(`Front-end listening port -> http://localhost:${app.get('port')}`)
});