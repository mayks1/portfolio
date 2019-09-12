var express = require('express')
var router = express.Router()

/* GET POST page. */
router.get('/', (req, res, next) => {
  res.render('links', { title: 'Линкс' })
})

module.exports = router