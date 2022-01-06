const express = require("express");

module.exports = function (app) {
    const ProtectedRouter = express.Router();

    // ProtectedRouter.post("/", send);

    app.use("/notifications", ProtectedRouter);
};