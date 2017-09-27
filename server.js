const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, () => console.log('all ok'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})
