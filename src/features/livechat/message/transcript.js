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
  ).then((response) => {
    const emailBody = chatTranscriptTemplate(response.data)
    
    const emailPayload = {
      from: 'hello@nadihealth.com',
      to:  req.body.email,
      subject: "Chat Transkrip",
      html: emailBody,
    }

    emailService.sendMail(
      emailPayload, 
      (error, status) => res.status(error ? 400 : 200).send({ 
        code: error ? 400 : 200, 
        message: error ? "BAD_REQUEST" : "OK",
        data: error ? null : status,
        add: response.data
      }))
  }).catch((error) => res.status(400).send({ 
    code: 400, 
    message: "BAD_REQUEST",
    data: error
  }))
}
