
//const path = require('path')

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const birds = require('./db/birds')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))

 /*app.get('/', function (req, res) {
   res.send('Hello world')
 })*/


app.get('/birds', function(req, res){
  res.render('birds/index', {birds: birds})
})



 app.listen(3000, function () {
   console.log('Set up and listening on port 3000');
 })
