const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  compagny: {
    type: String,
    maxlength: 50,
    // required: true,
  },
  address: {
    type: String,
    maxlength: 100,
  },
  phone: {
    type: Number,
    maxlength: 11,
  },
  email: {
    type: String,
    maxlength: 50,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 100,
    required: true,
  },
  refreshJWT: {
    token: {
      type: String,
      maxlength: 500,
      defalut: ""
    },
    addedAt: {
      type: Date,
      required: true,
      default: Date.now()
    },
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = {
  UserSchema: mongoose.model('User', UserSchema),
};
