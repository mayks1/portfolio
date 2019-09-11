var express = require('express')
var router = express.Router()

/* GET POST page. */
router.get('/', (req, res, next) => {
  res.render('post', { title: 'Пост' })
})

module.exports = router
