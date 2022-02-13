const axios = require('axios')

const jwt = ''

module.exports = function(req, res) {
  const conversationId = req.params.conversationId
  
  axios.get(
    `https://api.freshchat.com/v2/conversations/${conversationId}/messages`, 
    { headers: { 'Authorization': `Bearer ${jwt}` } }
  ).then((response) => {
    let data = response.data.messages

    res.send(data)
    
    
  }).catch(reason => { res.send({ code: 400, message: reason }) })
}