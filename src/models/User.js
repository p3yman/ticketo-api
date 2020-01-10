/*-----------------------------------------------------------------
- User model
-----------------------------------------------------------------*/
const Model = require('./Model');

module.exports = new Model('User', {
    first_name: {
        type    : String,
        required: true,
    },
    last_name : {
        type    : String,
        required: true,
    }
});
