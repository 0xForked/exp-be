const credentials = require("../../../credentials.json")

const apiUrl = () =>  credentials.livechat.url 

const requestOption = function () {
  return {
    auth: {
      username: credentials.livechat.account_id,
      password: credentials.livechat.personal_access_token
    },
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET',
    }
  }
}

module.exports = {
  apiUrl: apiUrl,
  requestOption: requestOption,
};


