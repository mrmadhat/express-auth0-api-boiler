const express = require("express")

// External middleware
const bodyParser = require("body-parser")
const helmet = require("helmet")
const morgan = require("morgan")

// Internal dependencies
const setupRoutes = require("./src/routes")
const port = process.env.PORT || 3001
const loggingLevel = process.env.NODE_ENV === "production" ? "combined" : "dev"

const app = express()

app.use(morgan(loggingLevel))
app.use(helmet())
app.use(bodyParser.json())

setupRoutes(app)

const startServer = port =>
  app.listen(port, () => console.log(`Listening on port ${port}`))

if (require.main === module) startServer(port)
else module.exports = app
