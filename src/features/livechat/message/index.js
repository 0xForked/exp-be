const express = require("express")
const transfer = require('./transfer')
const transcript = require('./transcript')

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.post("/transfer", transfer);
    ProtectedRouter.post("/transcript", transcript);
    
    app.use("/lc/chat", ProtectedRouter)
}
