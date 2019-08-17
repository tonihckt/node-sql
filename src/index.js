'use strict'
/**
 * **********************************
 * API EXPRESS 
 * **********************************
**/

const express = require('express');
const morgan = require('morgan'); // muestras peticiones en consola
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

/*
 * INITILIAZATIONS
*/
const app = express();
app.set('port', process.env.PORT || 54293)

//config motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')

/*
 * MIDDLEWARES
*/
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*
 * GLOBAL VARIABLES
*/
app.use((req, res, next) => {
    // app.locals.message = req.flash('message');
    // app.locals.success = req.flash('success');
    // app.locals.user = req.user;
    next();
  });

/*
 * ROUTES
*/
app.use(require('./routes/index'))
app.use(require('./routes/authentication'))
app.use(require('./routes/links'))

/*s
 * PUBLIC
*/
app.use(express.static(path.join(__dirname, 'public')))


/*
 * SERVER LISTENER
*/
app.listen(app.get('port'),()=>{
    console.log(`Front-end listening port -> http://localhost:${app.get('port')}`)
});