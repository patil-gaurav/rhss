// Required Package

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');
const csrf = require('csurf');

// Setup the express app
const app = express();

// Log request to the console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// HTML Views setting
app.set('views', path.join(__dirname, 'server/views'));
app.engine('.hbs', expressHbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: 'server/views/layouts',
  partialsDir: 'server/views/partials'
}));
app.set('view engine', '.hbs');

// Set the default catch-all route that sends back a welcome message in json format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to RHSS',
// }));

// Routes file
require('./server/routes')(app);

module.exports = app;
