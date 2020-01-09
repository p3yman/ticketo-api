/*-----------------------------------------------------------------
- Application entry point
-----------------------------------------------------------------*/
const express = require('express');
const morgan = require('morgan');

const app = express();

// Default middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

app.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Hello Ticketo.',
    });
});

// EXPORT APP
module.exports = app;
