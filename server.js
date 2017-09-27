const express = require('express')
const app = express()


app.listen(process.env.PORT || 8080, () => console.log('all ok'))

app.get('/', function (req, res) {
  res.send('Hello Chen!')
})
