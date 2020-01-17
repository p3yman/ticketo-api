/*-----------------------------------------------------------------
- General configs
-----------------------------------------------------------------*/
const mongoosePaginate = require('mongoose-paginate-v2');

mongoosePaginate.paginate.options = {
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
};
