var express = require('express');

// grab the user model
var Professional = require('../models/professional');
var User = require('../models/user');
var router = express.Router();

router.get('/get_all', function(req, res) {    
    Professional.find({}).populate('reviews.user').exec(function(err, professionals) {
      if (err) throw err;
      res.send(professionals);
    });
    
});

router.get('/get_professional_by_phone/:phone', function(req, res) {    
    Professional.findOne({phone:req.params.phone}).populate('reviews.user').exec(function(err, professional) {
      if (err) throw err;
      res.send(professional);
    });
    
});

router.post('/add_review', function(req, res) {
    Professional.findOne({phone: req.body.phone}, function(err, professional) {
        if (err) throw err;
        User.findOne({name: req.body.username}, function(err, user) {
            if (err) throw err;
            if(user) {
                if (!professional) {
                    professional = Professional();
                    professional.name = req.body.name;
                    professional.phone = req.body.phone;   
                }
                professional.reviews.push({user: user._id, stars: req.body.stars, text: req.body.text});
                professional.save(function(err) {
                  if (err) throw err;
                  console.log('new review added!');
                });
            }
        });
    });
    
    res.send('POST handler for /add_review route.');
});

module.exports = router;