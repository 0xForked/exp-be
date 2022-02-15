const liveChatAuth = require('./auth')
const liveChatAgent = require('./agent')
const liveChatCustomer = require('./customer')

module.exports = function (app) {
    liveChatAuth(app)
    liveChatAgent(app)
    liveChatCustomer(app)
}