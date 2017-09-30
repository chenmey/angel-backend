var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var professionalSchema = new Schema({
  name: String,
  phone: {type: String, unique: true},
  reviews: [{
      user: {type: Schema.ObjectId, ref: 'User'},
      stars: Number,
      text: String
  }],
  created_at: Date,
  updated_at: Date
});


professionalSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Professional = mongoose.model('Professional', professionalSchema);

// make this available to our users in our Node applications
module.exports = Professional;