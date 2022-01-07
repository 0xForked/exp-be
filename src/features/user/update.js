const fa = require('../../services/firebase')

module.exports = function(req, res) {
    if (!req.body.hasOwnProperty('fcm_token')) {
        res.send({ code: 422, message: "unprocessable entity" })
    }

    const userId = req.params.userId
    const fcmToken = req.body.fcm_token

    const db = fa.firestore()

    db.collection('users')
        .doc(userId)
        .update({ fcm_token: fcmToken })
        .then(() => { res.send({ code: 205, message: "reset content" }) })
        .catch(reason => { res.send({ code: 400, message: reason }) })
}