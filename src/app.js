/*-----------------------------------------------------------------
- Application entry point
-----------------------------------------------------------------*/
const express = require('express');
const morgan = require('morgan');

// Initiate application
const app = express();

// Default middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// ROUTES
const registerRoutes = require('./router');
registerRoutes(app);

// EXPORT APP
module.exports = app;
