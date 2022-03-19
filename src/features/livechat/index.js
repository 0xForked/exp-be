const liveChatAuth = require('./auth')
const liveChatAccount = require('./account')
const liveChatMessage = require('./message')

module.exports = function (app) {
    liveChatAuth(app)
    liveChatAccount(app)
    liveChatMessage(app)
}