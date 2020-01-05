const app = require("../../../index")
const supertest = require("supertest")
const request = supertest(app)
const getAuthToken = require("../../utils/getAuthToken")

describe("v1 routes", () => {
  describe("/", () => {
    test("should be protected", async done => {
      const res = await request.get("/v1")

      expect(res.status).toBe(401)

      done()
    })

    test("should be 200 when given a valid token", async done => {
      const body = await getAuthToken()
      const accessToken = JSON.parse(body)["access_token"]

      const headers = {
        Authorization: `Bearer ${accessToken}`
      }

      const res = await request.get("/v1").set(headers)

      expect(res.status).toBe(200)

      done()
    })
  })
})
