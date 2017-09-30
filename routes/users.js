var express = require('express');

// grab the user model
var User = require('../models/user');
var router = express.Router();

router.get('/get_all_users', function(req, res) {    
    User.find({}, function(err, users) {
      if (err) throw err;
      res.send(users);
    });
    
});

router.post('/save_new_user', function(req, res) {
    var newUser = User(req.body);
    newUser.save(function(err) {
      if (err) throw err;

      console.log('User created!');
    });
    res.send('POST handler for /users route.');
});

module.exports = router;