const express = require("express")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    // ProtectedRouter.get("/", function)

    app.use("/livechat/auth", ProtectedRouter)
}