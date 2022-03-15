const liveChatAuth = require('./auth')
const liveChatAccount = require('./account')

module.exports = function (app) {
    liveChatAuth(app)
    liveChatAccount(app)
}