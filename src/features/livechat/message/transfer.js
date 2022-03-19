const livechatService = require("@services/livechat")

module.exports = function(req, res) {
  if (!req.body.hasOwnProperty('agent_id') && 
  !req.body.hasOwnProperty('chat_id')) {
    return res.send({ 
      code: 422, 
      message: "UNPROCESSABLE_ENTITY" 
    })
  }
}


// FE LOAD
// https://api.livechatinc.com/v3.4/agent/action/list_agents_for_transfer 
// show agent list with active chat
// active chat >= 5 block trasfer
// active chat < 5 give access to transfer
// https://api.livechatinc.com/v3.4/agent/action/transfer_chat
// payload transfer
// {
//   "id": "PJ0MRSHTDG",
//   "target": {
//     "type": "agent",
//     "ids": [ "josep@tikon.id" ]
//   }
// }
