/*-----------------------------------------------------------------
- Database connection
-----------------------------------------------------------------*/
import mongoose from 'mongoose';

// Plugins
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import mongooseDelete from 'mongoose-delete';

// Connect to database
const DBName = process.env.DATABASE || 'test';
const DBPassword = process.env.DATABASE_PASSWORD || '';
const DB = DBName.replace('<PASSWORD>', DBPassword);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// Register Plugins
mongoose.plugin(mongoosePaginate, {
  lean: true,
  limit: 20,
  customLabels: {
    totalDocs: 'total',
    docs: 'results',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    meta: 'pagination'
  }
});
mongoose.plugin(mongooseUniqueValidator);
mongoose.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

// Hide `__v` from output
