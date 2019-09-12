const { config, engine }            = require('express-edge')
const createError                   = require('http-errors')
const express                       = require('express')
const path                          = require('path')
// const cookieParser                  = require('cookie-parser');
const bodyParser                    = require('body-parser')
const logger                        = require('morgan')
const mongoose                      = require('mongoose')

// REQUIRE ROUTES FILES ----------------------------------------->>
const indexRouter                   = require('./routes/index')
const usersRouter                   = require('./routes/users')
const postRouter                    = require('./routes/post')
const linksRouter                   = require('./routes/links')
const newPostRouter                  =require('./routes/new')
// -------------------------------------------------------------->>
const app                           = express();

// DATA BASE CONNECT
mongoose.connect('mongodb://localhost/portfolio-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'))
// view engine EDGE
app.use(engine)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// ----------------  ROUTES  -----------------------------
app.use('/', indexRouter)
app.use('/post', postRouter)
app.use('/users', usersRouter)
app.use('/links', linksRouter)
app.use('/posts/new', newPostRouter)
// ----------------  ROUTES  -----------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error', { title: 'Error 404' })
});

module.exports = app
