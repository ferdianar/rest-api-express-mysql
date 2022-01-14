var express = require('express')

// initialize PATH
var path = require('path')

// initialize Cookie Parser
var cookieParser = require('cookie-parser')

// import Morgan Logger
var logger = require('morgan')

// Routing
const indexRouter = require("./routes/index")

// User Routes
const usersRouter = require("./routes/users")

// Laptop Routes
const laptopRouter = require("./routes/laptop")

// create express server
var app = express()

// initialize Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// page redirect
app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/laptop", laptopRouter)

module.exports = app