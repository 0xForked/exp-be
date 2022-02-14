const user = require('../features/user')
// const notify = require('../features/notify')
// const freshchat = require('../features/freshchat')
// const liveChatAuth = require('../features/livechat/auth')
const liveChatAgent = require('../features/livechat/agent')

module.exports = function (app) {
    user(app)
    // notify(app)
    // freshchat(app)
    // liveChatAuth(app)
    liveChatAgent(app)
}