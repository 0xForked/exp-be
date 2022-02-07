const fa = require('../../services/firebase')

module.exports = function(req, res) {
    if (!req.body.hasOwnProperty('freshchat')) {
        res.send({ code: 422, message: "unprocessable entity" })
    }

    const userId = req.params.userId
    const freshChat = req.body.freshchat

    const db = fa.firestore()

    db.collection('users')
        .doc(userId)
        .update({ fresh_chat: freshChat })
        .then(() => { res.send({ code: 205, message: "reset content" }) })
        .catch(reason => { res.send({ code: 400, message: reason }) })
}