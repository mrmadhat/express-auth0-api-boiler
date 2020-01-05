/**
 * Exports middleware that validates incoming bearer
 * tokens
 */
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")
const { credentials } = require("../../config")

const { domain, audience } = credentials.auth

module.exports = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),
  audience,
  issuer: `https://${domain}/`,
  algorithm: ["RS256"]
})
