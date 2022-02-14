const axios = require('axios')

module.exports = function(req, res) {
  axios.post(`https://api.livechatinc.com/v3.4/agent/action/list_chats`, 
    {}, { 
      headers: { 
        'Authorization': 'Bearer dal:gIz5J4CG-U9IR1aBgiahzqWO9lc',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'POST',
      }
    }
  ).then((response) => {
    res.send(response.data)
  }).catch(reason => { res.send({ code: 400, message: reason }) })
}

