const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// parsing application/json
app.use(express.json())
// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// apply cors middleware
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Credentials'],
}))
// register modules routes
routes(app)
// apply home path
app.get('/',  (req, resp) => { resp.send({code: 200, message: 'Welcome to simple REST API'}) })
// apply not found path
app.get('*',  (req, resp) => { resp.send({code: 404, message: 'Not Found'}) })
  
module.exports = app
