const fa = require('../../services/firebase')

module.exports = function(req, res) {
    const db = fa.firestore()
    console.log()

    db.collection('products')
        .get()
        .then(snapshot => {
            const products = []

            snapshot.forEach((doc) => {
                if (!req.query.storeId) {
                    products.push({ ...doc.data() })
                } else if (doc.data().storeId.replace(/\s+/g, '') === req.query.storeId.replace(/\s+/g, '')) {
                    products.push(doc.data())
                }
            })

            if (products.length <= 0) {
                res.send({ code: 404, message: "not found" }) 
            }
            
            res.send({ products: products, pagination: {
                currentPage: 1,
                pageCount: 1,
                totalCount: products.length
            }})
        }).catch(reason => { res.send({ code: 400, message: reason }) })
}