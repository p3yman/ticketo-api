/*-----------------------------------------------------------------
- Server
-----------------------------------------------------------------*/
// Load env configs
import dotenv from 'dotenv';
dotenv.config();

// Database connection
import './db';

// Load application
import app from './app';

// Create and start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
