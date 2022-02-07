const express = require("express")
const storeData = require("./storeData")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.post("/:userId", storeData)

    app.use("/freshchat", ProtectedRouter)
}