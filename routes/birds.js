const express = require('express')
const router = express.Router()
 const birds = require('../db/birds')

// route to all birds in the database
router.get('/', function(req, res){

  res.json(birds)

})
//render html via submit button
router.get('/new' , function(req ,res){
  res.render('birds/new')
})

//get info of bird according to perticular id

router.get('/:id' , function(req, res){

  let id = req.params.id
  res.render('birds/show' , {id: id, birds : birds[id-1]})
})

// create bird object add it to database via index page (POST method)

router.post('/' , function(req, res){
  birds.push(req.body)
  res.redirect('/birds')
})

module.exports = router
