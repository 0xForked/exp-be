const express = require("express")
const chatList = require("./chatList")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.get("/", chatList)

    app.use("/livechat/agent", ProtectedRouter)
}