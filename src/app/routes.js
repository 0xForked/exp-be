const user = require('../features/user')
const notify = require('../features/notify')

module.exports = function (app) {
    user(app)
    notify(app)
}