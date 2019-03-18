const bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'),
	  Schema   = mongoose.Schema;

//Schema
var userSchema = new Schema({
	email: 		{ type: String, unique: true, require: true },
	password: 	{ type: String, unique: true, require: true }
}, { collection: 'users' });

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.genSalt(10, function (err, salt) 
  {
    if (err) 
    {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function (err, hash) 
    {
      if (err) 
      {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);

//authenticate input against database
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
