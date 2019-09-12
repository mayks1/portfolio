var express = require('express')
var router = express.Router()

/* GET POST page. */
router.get('/', (req, res, next) => {
  res.render('create', { title: 'Създаване на пост' })
})

module.exports = router