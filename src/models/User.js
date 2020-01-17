/*-----------------------------------------------------------------
- User model
-----------------------------------------------------------------*/
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create schema
const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, 'This username is already taken.'],
      required: [true, 'Username is required.'],
      match: [
        /^[a-zA-Z0-9]+$/,
        'Username can only contain letters and numbers.'
      ],
      minlength: [3, 'Username cannot be less than 3 characters.'],
      maxlength: [32, 'Username cannot be longer than 32 characters.'],
      index: true
    },

    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email address is required.'],
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'],
      unique: [true, 'This email is already taken.'],
      index: true
    },
    emailConfirmedAt: {
      type: Date
    },

    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },

    gender: {
      type: Number
    },

    birthAt: {
      type: Date
    },

    password: {
      type: String,
      required: true,
      minlength: [6, 'Password cannot be less than 6 characters.'],
      maxlength: [32, 'Password cannot be longer than 32 characters.'],
      select: false
    },
    passwordForceChange: {
      type: Number
    },
    resetToken: {
      type: String
    },

    status: {
      type: String,
      default: 'active'
    },

    deletedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

// Hash password using doc middleware
Schema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

// Create model
const Model = mongoose.model('User', Schema);

module.exports = Model;
