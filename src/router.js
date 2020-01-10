/*-----------------------------------------------------------------
- Router
-----------------------------------------------------------------*/
// ROUTES
const userRoutes = require('./routes/user');

// PREFIX
const prefix = '/api/v1';

const registerRoutes = (app) => {
    // REGISTER MODULES ROUTES
    app.use(`${prefix}/users`, userRoutes);
    
    // REGISTER HOME
    app.route('/').get((req, res) => {
        res.status(200).json({
            message: 'Hello Ticketo.',
        });
    });
    
    // REGISTER 404
    app.route('*').get((req, res) => {
        res.status(404).json({
            message: 'NOT FOUND!',
        });
    });
};

module.exports = registerRoutes;
