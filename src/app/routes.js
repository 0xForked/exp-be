const user = require('../features/user')
const ecommerce = require('../features/ecommerce')
// const notify = require('../features/notify')
// const freshChat = require('../features/freshchat')
const liveChat = require('../features/livechat')
// const tawkChat = require('../features/tawk')

module.exports = function (app) {
    user(app)
    ecommerce(app)
    // notify(app)
    // freshChat(app)
    liveChat(app)
    // tawkChat(app)
}