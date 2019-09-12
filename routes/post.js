var express = require('express')
var router = express.Router()

/* GET POST page. */
router.get('/:id', (req, res, next) => {
  console.log(req.params)
  res.render('post', { title: 'Пост' })
})

module.exports = router
