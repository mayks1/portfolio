const express   = require('express')
const router    = express.Router()
const Post      = require('../database/models/Post')

/* GET POST page. */
router.get('/', (req, res, next) => {

  res.render('new', { title: 'Нов Пост' })

})

/* Save the POST */
router.post('/', function(req, res){

  Post.create(req.body, (error, post) => {

    res.redirect('/')

  })

})


module.exports = router