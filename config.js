const env = process.env.NODE_ENV || "development"

const project = {
  dir: __dirname
}

const credentials = require(`./.credentials.${env}`)

module.exports = { project, credentials }
