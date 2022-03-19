// const fa = require('../../services/firebase')
// const axios = require('axios')

// module.exports = function(req, res) {
//     if (!req.body.hasOwnProperty('freshchat')) {
//         res.send({ code: 422, message: "unprocessable entity" })
//     }

//     const userId = req.params.userId
//     const freshChat = req.body.freshchat

//     const db = fa.firestore()

//     db.collection('users')
//         .doc(userId)
//         .update({ fresh_chat: freshChat })
//         .then((data) => { 
//             loadStoreConversation(freshChat, userId)

//             res.send({ code: 205, message: "reset content" }) 

//         })
//         .catch(reason => { res.send({ code: 400, message: reason }) })
        
// }



// const jwt = ''

// function loadStoreConversation(freshChat, userId) {
//     axios.get(
//         `https://api.freshchat.com/v2/users/${freshChat.alias}/conversations`, 
//         { headers: { 'Authorization': `Bearer ${jwt}` } }
//     ).then((response) => {
//         response.data.conversations.forEach(conversation => {
//             axios.get(
//                 `https://api.freshchat.com/v2/conversations/${conversation.id}`, 
//                 { headers: { 'Authorization': `Bearer ${jwt}` } }
//             ).then((response) => {
//                 let data = response.data
//                 const db = fa.firestore()

//                 db.collection('freshchat_conversation')
//                 .doc(userId)
//                 .set({ detail: data, beuuid: userId })
//                 .then(() => { 
                    
//                     console.log('data store successfully')
        
//                 })
//                 .catch(reason => { res.send({ code: 400, message: reason }) })
//             })
//         });
//     })
    
// }   