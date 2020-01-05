/**
 * Retrieve access token
 * 
 * Returns a promise that resolves with a JSON object containing
 * "access_token" and "token_type" properties.
 */
const request = require("request-promise")

const { credentials } = require("../../config")
const { domain, audience, clientId, clientSecret } = credentials.auth

const body = {
  client_id: clientId,
  client_secret: clientSecret,
  audience,
  grant_type: "client_credentials"
}

const options = {
  method: "POST",
  url: `https://${domain}/oauth/token`,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body)
}

module.exports = () => request(options)
