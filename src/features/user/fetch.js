const fa = require('../../services/firebase')

module.exports = function(req, res) {
    const db = fa.firestore()

    db.collection('users')
        .get()
        .then(snapshot => {
            const users = []

            snapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() })
            })

            if (users.length <= 0) {
                res.send({ code: 404, message: "not found" }) 
            }
            
            res.send(users)
        }).catch(reason => { res.send({ code: 400, message: reason }) })
}