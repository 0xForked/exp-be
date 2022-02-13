const axios = require('axios')

const jwt = 'eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI2MDkyODZmOC02ZGRjLTQ1YzMtYTcwOS1jYmFlZDUxNzc0NzAiLCJjbGllbnRJZCI6ImZjLTBiOGIyOTg0LTE3MjEtNDdiOS05MmY4LWUzY2I4NGI4ZmM1OCIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGRhc2hib2FyZDpyZWFkIHVzZXI6cmVhZCB1c2VyOmNyZWF0ZSB1c2VyOnVwZGF0ZSB1c2VyOmRlbGV0ZSBvdXRib3VuZG1lc3NhZ2U6c2VuZCBvdXRib3VuZG1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOnNlbmQgbWVzc2FnaW5nLWNoYW5uZWxzOm1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpjcmVhdGUgbWVzc2FnaW5nLWNoYW5uZWxzOnRlbXBsYXRlOmdldCBmaWx0ZXJpbmJveDpyZWFkIGZpbHRlcmluYm94OmNvdW50OnJlYWQgcm9sZTpyZWFkIGltYWdlOnVwbG9hZCIsImlzcyI6ImZyZXNoY2hhdCIsInR5cCI6IkJlYXJlciIsImV4cCI6MTk1OTc3Mjg2NCwiaWF0IjoxNjQ0MjQwMDY0LCJqdGkiOiI5NTUxMWE5Ni1lMzcyLTQ5YjgtOWM5Ny0yNGQwNGE0YzhlOTUifQ.cGMBJIF9hBg79gdbQhWX3WRips2soHtpR9sQEoch47M'

module.exports = function(req, res) {
  const conversationId = '4c298118-c683-4dcb-9fbe-eb97c8aeff0e'
  const message = req.params.message
  
  axios.post(
    `https://api.freshchat.com/v2/conversations/${conversationId}/messages`, 
    {
      message_parts: [
          {
            text: {
              content: `${message}`
              }
          }
      ],
      app_id: "1189b29c-d543-4b3d-98e2-32608d4b7a2d",
      actor_id: "19eb93d2-7bd2-4800-a6bb-18d45ec12cf0",
      org_actor_id: "406007025333036277",
      id: "0cb506de-902b-477d-8b0b-f86d1bc6a1ba",
      channel_id: "090dad0a-1987-4977-97eb-4a16e054d04e",
      conversation_id: "4c298118-c683-4dcb-9fbe-eb97c8aeff0e",
      interaction_id: "579713766869995-1644286881351",
      message_type: "normal",
      actor_type: "agent",
      created_time: "2022-02-08T04:23:18.745Z",
      user_id: "3442d05b-b938-4028-897f-f72c04a107b1"
  },
  { headers: { 'Authorization': `Bearer ${jwt}` } }
  ).then((response) => {
    
    res.send(response)
    
  }).catch(reason => { res.send({ code: 400, message: reason }) })
}