const express = require("express")
const toAllUser = require("./toAll")
const toSpecifiedUser = require("./toSpecified")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.post("/", toAllUser)
    ProtectedRouter.post("/:userId", toSpecifiedUser)

    app.use("/notifications", ProtectedRouter)
}