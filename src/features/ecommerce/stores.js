const fa = require('@services/firebase')

module.exports = function(req, res) {
    const db = fa.firestore()

    db.collection('stores')
        .get()
        .then(snapshot => {
            const stores = []

            snapshot.forEach((doc) => {
                stores.push({ ...doc.data() })
            })

            if (stores.length <= 0) {
                res.send({ code: 404, message: "NOT_FOUND" }) 
            }
            
            res.send(stores)
        }).catch(reason => { res.send({ code: 400, message: reason }) })
}