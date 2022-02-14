const express = require("express")
const token = require("./token")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.get("/", token)

    app.use("/livechat/auth", ProtectedRouter)
}