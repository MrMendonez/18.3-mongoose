// Using the starter code, write two custom methods and call them before saving the user.
// One method should take the firstName and lastName fields and combine them to create the fullName field
// The other should save the current date as the lastUpdated field.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date
  },
  fullName: String
});

///Write your custom methods here
UserSchema.methods.fullnamifier = function(callback) {
  this.fullName = this.firstName + " " + this.lastName;
  callback(null, this.fullName);
}










var User = mongoose.model('User', UserSchema);
module.exports = User;