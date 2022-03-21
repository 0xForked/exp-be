const livechatService = require("@services/livechat")

const chatTranscriptTemplate = require('@views/email/chat-transkrip.js')

const emailService = require('@services/email')

module.exports = function(req, res) {
  if (
    !req.body.hasOwnProperty('email') && 
    !req.body.hasOwnProperty('chat_id') && 
    !req.body.hasOwnProperty('thread_id')
  ) {
    return res.send({ 
      code: 422, 
      message: "UNPROCESSABLE_ENTITY" 
    })
  }
  
  return processEvent(req, res)
}

async function processEvent(req, res) { 
  await livechatService.messagingApi.post(
    '/agent/action/get_chat', 
    {
      'chat_id': req.body.chat_id, 
      'thread_id': req.body.thread_id
    }
  ).then(async (response) => {
    const emailBody = chatTranscriptTemplate(response.data)
    
    const emailPayload = {
      from: 'hello@nadihealth.com',
      to:  req.body.email,
      subject: "Chat Transkrip",
      html: emailBody,
    }

    await livechatService.messagingApi.post(
      '/agent/action/deactivate_chat', 
      {
        'id': req.body.chat_id, 
        'ignore_requester_presence': true
      }
    ).then((response) => {
      console.log('success', response.data)
    }).catch((err) => res.status(err.response.status).send({ 
      code: err.response.status, 
      message: err.response.statusText.toUpperCase(),
      data: err.response.data
    }))

    emailService.sendMail(
      emailPayload, 
      (error, status) => res.status(error ? 400 : 200).send({ 
        code: error ? 400 : 200, 
        message: error ? "BAD_REQUEST" : "OK",
        data: error ? null : status,
        add: response.data
      }))
  }).catch((error) => res.status(error.response.status).send({ 
    code: error.response.status, 
    message: error.response.statusText.toUpperCase(),
    data: error.response.data
  }))
}
