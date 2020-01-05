const express = require("express")
const router = require("express-promise-router")()

const controllers = require("../../controllers/v1")

router.route("/").get(controllers.home)

module.exports = router
