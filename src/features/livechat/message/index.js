const express = require("express")
const transfer = require('./transfer')
const transcript = require('./transcript')
const voice = require('./voice')

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.post("/transfer", transfer);
    ProtectedRouter.post("/transcript", transcript);
    ProtectedRouter.post("/voice", voice);
    
    app.use("/lc/chat", ProtectedRouter)
}
