const credentials = require("@configs/credentials.json")

const axios = require("axios");


const authBody = (authCode) => {
  return {
    grant_type: "authorization_code",
    code: authCode,
    client_id: credentials.livechat.client_id,
    client_secret: credentials.livechat.client_secret,
    redirect_uri: credentials.livechat.redirect_uri
  }
};

const authRefreshBody = (refreshToken) => {
  return {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: credentials.livechat.client_id,
    client_secret: credentials.livechat.client_secret,
  }
};

const accountsApi = axios.create({baseURL: credentials.livechat.accApiUrl});

const messagingApi =axios.create({
  baseURL: credentials.livechat.msgApiUrl,
  auth: {
    username: credentials.livechat.account_id,
    password: credentials.livechat.personal_access_token
  },
  headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'POST, GET',
  },
});

module.exports = {
  authBody: authBody,
  authRefreshBody: authRefreshBody,
  accountsApi: accountsApi,
  messagingApi: messagingApi,
};
