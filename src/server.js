/*-----------------------------------------------------------------
- Server
-----------------------------------------------------------------*/
// Load env configs
const dotenv = require('dotenv');
dotenv.config();

// Database connection
require('./db');

// Load application
const app = require('./app');

// Create and start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
