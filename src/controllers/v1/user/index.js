const db = require("../../../db")

module.exports = {
  get: async (req, res) => {
    const user = await db.user.getbyAuthId(req.user.sub)

    if (user) return res.send({ user })

    res.send({ error: "no user registered" })
  },
  post: async (req, res) => {
    const userData = {
      authId: req.user.sub
    }

    const user = await db.user.create(userData)

    if (user) return res.send({ user })

    return res.send({ error: "unable to register user" })
  }
}
