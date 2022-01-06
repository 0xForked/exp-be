const express = require("express")

const fetchAll = require('./fetch')
const findById = require('./find')
const updateById = require('./update')

module.exports = function (app) {
    const ProtectedRouter = express.Router()
    
    // TODO: Apply middleware
    // ProtectedRouter.use(authMiddleware);

    ProtectedRouter.get("/", fetchAll)
    ProtectedRouter.get("/:userId", findById);
    ProtectedRouter.put("/:userId", updateById);

    app.use("/users", ProtectedRouter)
};