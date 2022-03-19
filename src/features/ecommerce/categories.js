const fa = require('@services/firebase')

module.exports = function(req, res) {
    const db = fa.firestore()

    db.collection('categories')
        .get()
        .then(snapshot => {
            const categories = []

            snapshot.forEach((doc) => {
                categories.push({ ...doc.data() })
            })

            if (categories.length <= 0) {
                res.send({ code: 404, message: "NOT_FOUND" }) 
            }
            
            res.send({ categories: categories})
        }).catch(reason => { res.send({ code: 400, message: reason }) })
}