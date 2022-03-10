const axios = require('axios')
const livechat = require('../../../services/livechat')

module.exports = function(req, res) {
  axios.post(
    `${livechat.apiUrl()}/agent/action/list_chats`, 
    {}, livechat.requestOption()
  ).then((response) => {
    res.send(response.data)
  }).catch(reason => { res.send({ code: 400, message: reason }) })
}

