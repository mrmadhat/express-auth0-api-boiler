const express = require("express")
const router = require("express-promise-router")()

router.route("/").get((req, res) => res.send({ msg: "got here" }))

module.exports = router
