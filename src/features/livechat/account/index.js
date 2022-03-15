const express = require("express")

module.exports = function (app) {
    const ProtectedRouter = express.Router()
    
    app.use("/livechat/account", ProtectedRouter)
}