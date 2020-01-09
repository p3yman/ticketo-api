/*-----------------------------------------------------------------
- Server
-----------------------------------------------------------------*/
const mongoose = require('mongoose');

// Load env configs
const dotenv = require('dotenv');
dotenv.config();

// Connect to database
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('DB connection successful!'));

// Load application
const app = require('./app');

// Create and start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});


