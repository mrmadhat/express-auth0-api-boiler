const protectRoute = require("../middleware/protect-route")
const v1Routes = require("./v1")

module.exports = app => {
  app.use("/v1", protectRoute, v1Routes)
}
