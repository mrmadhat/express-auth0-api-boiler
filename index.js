const express = require("express")

// External middleware
const bodyParser = require("body-parser")

const helmet = require("helmet")
// Internal middleware
const logger = require("./src/middleware/logger")
const errorHandler = require("./src/middleware/error-handler")
const setupRoutes = require("./src/routes")

const app = express()

app.use(helmet())
app.use(logger)
app.use(bodyParser.json())

setupRoutes(app)

app.use(errorHandler)

const port = process.env.PORT || 3001

function startServer(port) {
  app.listen(port, () => console.log(`App listening on port ${port}`))
}

if (require.main === module) {
  startServer(port)
} else {
  module.exports = app
}
