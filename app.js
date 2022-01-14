var express = require('express')

// initialize PATH
var path = require('path')

// initialize Cookie Parser
var cookieParser = require('cookie-parser')

// import Morgan Logger
var logger = require('morgan')

// Routing
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

// create express server
var app = express()

// initialize Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app