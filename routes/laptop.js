var express = require('express')
var router = express.Router()

const Validator = require("fastest-validator")
const v = new Validator()

const { Laptop } = require("../models")

router.get("/", (request, response) => {
    response.send("<h1>Laptop Page</h1>")
})

router.post("/", async(request, response) => {
    const schemas = {
        name: "string",
        price: "string",
        company: "string",
        description: "string"
    }

    const validate = v.validate(request.body, schemas)
    if (validate.length) {
        return response.status().json(validate)
    }

    const laptop = await Laptop.create(request.body)
    response.json(laptop)
})

module.exports = router