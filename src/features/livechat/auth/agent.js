const livechat = require("@services/livechat")

module.exports = function(req, res) {
  return exchange(req, res)
}

async function exchange(req, res) {
  // request body for get access token
  const atBody = livechat.authBody(req.body.code)
  // request body for refresh token
  const rtBody = livechat.authRefreshBody(req.body.code)
  // exchange_code | refresh_token
  const rqBody = (req.query.action === 'exchange_code') ? atBody : rtBody
  
  try {
    const authExchange = await livechat.accountsApi.post("/token", rqBody);
    
    return res.send({ code: 200, payload: authExchange.data });
  } catch (error) {
    return res.send({ code: 400, message: error }) 
  }
}