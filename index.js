const app = require('./src/app')

const http = require('http')

const server = http.createServer(app)

const port = 3000

console.log(`Running express on port ${port}`)

server.listen(port)