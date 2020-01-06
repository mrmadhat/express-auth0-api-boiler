const user = require("./user")
const home = (req, res) => res.send({ msg: "got here" })

module.exports = { home, user }
