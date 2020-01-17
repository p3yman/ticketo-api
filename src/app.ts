/*-----------------------------------------------------------------
- Application entry point
-----------------------------------------------------------------*/
import express, { Application } from 'express';
import morgan from 'morgan';

// Configs
require('./configs');

// Initiate application
const app: Application = express();

// Default middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// ROUTES
import router from './router';
router(app);

// EXPORT APP
export default app;
