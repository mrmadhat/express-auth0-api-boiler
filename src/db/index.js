const mongoose = require("mongoose")
const { credentials } = require("../../config")
const { connectionString } = credentials.mongo
const { User } = require("./models/v1")

if (!credentials) {
  console.error(
    `Connection string missing in environment: ${process.env.NODE_ENV}`
  )
  process.exit(1)
}

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error", () => {
  console.error("MongoDB error: " + err.message)
  process.exit(1)
})

db.on("open", () => console.log("MongoDB Connection established"))

module.exports = {
  user: {
    getbyAuthId: async authId => User.findOne({ authId }),
    create: async data => new User(data).save()
  }
}
