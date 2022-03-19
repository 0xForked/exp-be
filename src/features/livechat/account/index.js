const express = require("express")

module.exports = function (app) {
    const ProtectedRouter = express.Router()

    // ProtectedRouter.post("/", () => {});
    
    app.use("/lc/account", ProtectedRouter)
}