var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get("/", (request, response, next) => {
    response.send("<h1>Users Page</h1>")
})

module.exports = router