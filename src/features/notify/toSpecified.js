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

            const message = {
                data: {
                    user_id: userId
                },
                notification: { 
                    title: 'coba notify',
                    body: 'ini cuma coba kirim notifikasi'
                },
                token: snapshot.data().fcm_token,
            }
            
            fa.messaging().send(message).then((response) => {
                res.send({ code: 200, status: "OK", data: response })
            })
        }).catch(reason => { res.send({ code: 400, message: reason}) })
}