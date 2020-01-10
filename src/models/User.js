/*-----------------------------------------------------------------
- User model
-----------------------------------------------------------------*/
const Model = require('./Model');

module.exports = new Model('User', {
    username: {
        type: String,
    },
    
    email           : {
        type     : String,
        required : true,
        unique   : true,
        lowercase: true,
        dropDups : true,
    },
    emailConfirmedAt: {
        type: Date,
    },
    
    mobile           : {
        type: Number,
    },
    mobileConfirmedAt: {
        type: Date,
    },
    
    name_title: {
        type: String,
    },
    firstName : {
        type    : String,
        required: true,
    },
    lastName  : {
        type    : String,
        required: true,
    },
    fullName  : {
        type: String,
    },
    
    gender: {
        type: Number,
    },
    
    birthAt: {
        type: Date,
    },
    
    password           : {
        type    : String,
        required: true,
        select  : false,
    },
    passwordForceChange: {
        type: Number,
    },
    resetToken         : {
        type: String,
    },
    
    status: {
        type: String,
    },
    
    meta: {
        type: String,
    },
    
    deletedAt: {
        type: Date,
    },
    
});
