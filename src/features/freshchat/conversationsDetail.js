const axios = require('axios')

const jwt = 'eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI2MDkyODZmOC02ZGRjLTQ1YzMtYTcwOS1jYmFlZDUxNzc0NzAiLCJjbGllbnRJZCI6ImZjLTBiOGIyOTg0LTE3MjEtNDdiOS05MmY4LWUzY2I4NGI4ZmM1OCIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGRhc2hib2FyZDpyZWFkIHVzZXI6cmVhZCB1c2VyOmNyZWF0ZSB1c2VyOnVwZGF0ZSB1c2VyOmRlbGV0ZSBvdXRib3VuZG1lc3NhZ2U6c2VuZCBvdXRib3VuZG1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOnNlbmQgbWVzc2FnaW5nLWNoYW5uZWxzOm1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpjcmVhdGUgbWVzc2FnaW5nLWNoYW5uZWxzOnRlbXBsYXRlOmdldCBmaWx0ZXJpbmJveDpyZWFkIGZpbHRlcmluYm94OmNvdW50OnJlYWQgcm9sZTpyZWFkIGltYWdlOnVwbG9hZCIsImlzcyI6ImZyZXNoY2hhdCIsInR5cCI6IkJlYXJlciIsImV4cCI6MTk1OTc3Mjg2NCwiaWF0IjoxNjQ0MjQwMDY0LCJqdGkiOiI5NTUxMWE5Ni1lMzcyLTQ5YjgtOWM5Ny0yNGQwNGE0YzhlOTUifQ.cGMBJIF9hBg79gdbQhWX3WRips2soHtpR9sQEoch47M'

module.exports = function(req, res) {
  const conversationId = req.params.conversationId
  
  axios.get(
    `https://api.freshchat.com/v2/conversations/${conversationId}/messages`, 
    { headers: { 'Authorization': `Bearer ${jwt}` } }
  ).then((response) => {
    let data = response.data.messages

    res.send(data)
    
    
  }).catch(reason => { res.send({ code: 400, message: reason }) })
}