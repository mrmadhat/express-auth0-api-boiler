const express = require("express")
const router = require("express-promise-router")()

const controllers = require("../../controllers/v1")
const { user } = controllers

router.route("/").get(controllers.home)

router
  .route("/user")
  .get(user.get)
  .post(user.post)

module.exports = router
