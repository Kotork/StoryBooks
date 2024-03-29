const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true // Required beacause google is the only authentication available
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create collection and add Schema
mongoose.model('users', UserSchema);