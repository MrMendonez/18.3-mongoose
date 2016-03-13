var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  }
});

UserSchema.methods.coolifier = function(callback) {
  this.username += ' is cool';
  callback(null, this.username);
};

var User = mongoose.model('User', UserSchema);
module.exports = User;