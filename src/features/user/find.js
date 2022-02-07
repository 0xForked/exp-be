const fa = require('../../services/firebase')

module.exports = function(req, res) {
    const userId = req.params.userId

    const db = fa.firestore()

    db.collection('users')
        .doc(userId)
        .get().then(snapshot => {
            if (!snapshot.exists) {
                res.send({ code: 404, message: "not found"})
            }

            const user = {
                id: userId,
                email: snapshot.data().email,
                name: snapshot.data().name,
                fcm_token: snapshot.data().fcm_token,
                fresh_chat: snapshot.data().fresh_chat
            }
            
            res.send(user)
        }).catch(reason => { res.send({ code: 400, message: reason}) })
}