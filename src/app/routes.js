const ecommerce = require('@features/ecommerce')
const liveChat = require('@features/livechat')
// const user = require('@features/user')
// const notify = require('@features/notify')
// const freshChat = require('@features/freshchat')
// const tawkChat = require('@features/tawk')

module.exports = function (app) {
    ecommerce(app)
    liveChat(app)
    // user(app)
    // notify(app)
    // freshChat(app)
    // tawkChat(app)
}