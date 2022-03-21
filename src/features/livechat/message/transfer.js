const livechatService = require("@services/livechat")

module.exports = function(req, res) {
  if (!req.body.hasOwnProperty('agent_id') && 
  !req.body.hasOwnProperty('chat_id')) {
    return res.send({ 
      code: 422, 
      message: "UNPROCESSABLE_ENTITY" 
    })
  }

  return processEvent(req, res)
}

async function processEvent(req, res) { 
    await livechatService.messagingApi.post(
      '/agent/action/transfer_chat', 
      {
        "id": req.body.chat_id, 
        "target": {
          "type": "agent",
          "ids": [ req.body.agent_id ]
        },
        "ignore_requester_presence": true,
      }
    ).then(async (response) => res.status(200).send({ 
      code: 200, 
      message: "OK",
      data: response.data,
    })).catch((error) => res.status(error.response.status).send({ 
      code: error.response.status, 
      message: error.response.statusText.toUpperCase(),
      data: error.response.data
    }))
}
