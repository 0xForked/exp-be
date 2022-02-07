const user = require('../features/user')
const notify = require('../features/notify')
const freshchat = require('../features/freshchat')

module.exports = function (app) {
    user(app)
    notify(app)
    freshchat(app)
}