const express = require("express")
const conversations = require("./conversations")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.get("/conversations", conversations)

    app.use("/livechat/agent", ProtectedRouter)
}