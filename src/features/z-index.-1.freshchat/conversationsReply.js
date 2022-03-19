// const axios = require('axios')

// const jwt = ''

// module.exports = function(req, res) {
//   const conversationId = '4c298118-c683-4dcb-9fbe-eb97c8aeff0e'
//   const message = req.params.message
  
//   axios.post(
//     `https://api.freshchat.com/v2/conversations/${conversationId}/messages`, 
//     {
//       message_parts: [
//           {
//             text: {
//               content: `${message}`
//               }
//           }
//       ],
//       app_id: "1189b29c-d543-4b3d-98e2-32608d4b7a2d",
//       actor_id: "19eb93d2-7bd2-4800-a6bb-18d45ec12cf0",
//       org_actor_id: "406007025333036277",
//       id: "0cb506de-902b-477d-8b0b-f86d1bc6a1ba",
//       channel_id: "090dad0a-1987-4977-97eb-4a16e054d04e",
//       conversation_id: "4c298118-c683-4dcb-9fbe-eb97c8aeff0e",
//       interaction_id: "579713766869995-1644286881351",
//       message_type: "normal",
//       actor_type: "agent",
//       created_time: "2022-02-08T04:23:18.745Z",
//       user_id: "3442d05b-b938-4028-897f-f72c04a107b1"
//   },
//   { headers: { 'Authorization': `Bearer ${jwt}` } }
//   ).then((response) => {
    
//     res.send(response)
    
//   }).catch(reason => { res.send({ code: 400, message: reason }) })
// }