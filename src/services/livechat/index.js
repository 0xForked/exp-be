const credentials = require("../../../credentials.json")
const axios = require("axios");

const requestOption = function (options) {
  return {
    options,
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET',
    }
  }
}

const authBody = (authCode) => {
  return {
    grant_type: "authorization_code",
    code: authCode,
    client_id: credentials.livechat.client_id,
    client_secret: credentials.livechat.client_secret,
    redirect_uri: credentials.livechat.redirect_uri
  }
};

const authRefreshBody =  (refreshToken) => {
  return {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: credentials.livechat.client_id,
    client_secret: credentials.livechat.client_secret,
  }
};

const accountsApi = axios.create({
  baseURL: "https://accounts.livechatinc.com"
});

module.exports = {
  requestOption: requestOption,
  accountsApi: accountsApi,
  authBody: authBody,
  authRefreshBody: authRefreshBody
};
