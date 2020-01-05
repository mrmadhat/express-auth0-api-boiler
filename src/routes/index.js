const protectRoute = require("../middleware/protect-route")
const errorHandler = require("../middleware/error-handler")
const unknownRouteHandler = require("../middleware/unknown-route-handler")

const v1Routes = require("./v1")

module.exports = app => {
  app.use("/v1", protectRoute, v1Routes)
  app.use(errorHandler)
  app.use(unknownRouteHandler)
}
