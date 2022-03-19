const express = require("express")
const agent = require("./agent")
const customer = require("./customer")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    ProtectedRouter.post("/agent", agent);
    ProtectedRouter.post("/customer", customer);
    
    app.use("/lc/auth", ProtectedRouter)
}