var express = require('express')
var router = express.Router()

// import dotenv
require("dotenv/config")

/* GET home page. */
router.get('/', function(request, response, next) {
    res.render('index', { title: 'Express' })
});

// Route Portfolio
router.get("/portfolio", (request, response) => {
    response.json({
        title: process.env.APP_NAME,
        pages: "portfolio",
        creator: "ferdian"
    })
})

module.exports = router