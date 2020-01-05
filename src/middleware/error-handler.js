const customErrorMessage = require("../utils/customErrorMessage")

module.exports = (err, req, res, next) => {
  customErrorMessage(err)
  res.status(401).send({ error: "not authorised" })
}
