var express     = require('express')
var router      = express.Router()
const Post      = require('../database/models/Post')

/* GET home page. */
router.get('/', async (req, res, next) => {

  const posts = await Post.find({})

  res.render('index', { title: 'Начало', posts })

})

module.exports = router
