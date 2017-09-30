const express = require('express')
var mongoose = require('mongoose')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var userRoutes = require('./routes/users')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://chen:samsung1@ds153003.mlab.com:53003/angel', { useMongoClient: true });


app.use('/users', userRoutes);

app.listen(process.env.PORT || 8080, () => console.log('all ok'))


app.get('/', function (req, res) {
  res.send('Hello Chen!')
})
