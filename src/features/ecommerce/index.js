const express = require("express")
const stores = require('./stores')
const categories = require('./categories')
const products = require('./products')

module.exports = function (app) {
    const ProtectedRouter = express.Router()
   
    ProtectedRouter.get("/stores", stores)
    ProtectedRouter.get("/categories", categories)
    ProtectedRouter.get("/products", products)

    app.use("/ecommerce", ProtectedRouter)
};