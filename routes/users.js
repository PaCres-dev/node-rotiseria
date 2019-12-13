
module.exports = function(app) {

  const User     = require('../models/users.js');

  //Login
  findUsers = function(req, res) {
    console.log(req.body);

    var email = req.body.email;
    var password = req.body.password;
    
    User.findOne({email : email}, function(err, user) {
      if(err) throw err;
      if(!user) {
        return res.json({success: false, msg: 'User not found'});
      }

      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
          req.session.user = user._id;
          req.session.pass = user.password;
          console.log(req.session);
          return res.json({success: true, msg: 'Nice pass'});
        }
        else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  }

  //Register
  createUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var user = new User({
      email    : req.body.email,
      password : req.body.password
    });

    user.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(user);
  }

  //Link routes and functions
  app.post('/api/users', findUsers);
  app.post('/api/newuser', createUser);

}