/*-----------------------------------------------------------------
- Router
-----------------------------------------------------------------*/
// ROUTES
import userRoutes from './routes/user';
import { Application, Request, Response } from 'express';

// PREFIX
const prefix = '/api/v1';

const registerRoutes = (app: Application): void => {
  // REGISTER MODULES ROUTES
  app.use(`${prefix}/users`, userRoutes);

  // REGISTER HOME
  app.route('/').get((req: Request, res: Response) => {
    res.status(200).json({
      message: 'Hello Ticketo.'
    });
  });

  // REGISTER 404
  app.route('*').get((req: Request, res: Response) => {
    res.status(404).json({
      message: 'NOT FOUND!'
    });
  });
};

export default registerRoutes;
