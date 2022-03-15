const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// parsing application/json
app.use(express.json())
// parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// apply cors middleware
var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:8080'
];
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Credentials'],
    origin: function(origin, callback){
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
          var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
     }
}))
// register modules routes
routes(app)
// apply home path
app.get('/',  (req, resp) => { resp.send({code: 200, message: 'Welcome to simple REST API'}) })
// apply not found path
app.get('*',  (req, resp) => { resp.send({code: 404, message: 'Not Found'}) })
  
module.exports = app
