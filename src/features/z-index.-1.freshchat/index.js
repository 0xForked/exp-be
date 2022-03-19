// const express = require("express")
// const storeData = require("./storeData")
// const conversations = require('./conversations')
// const conversationsDetail = require('./conversationsDetail')
// const conversationReply = require('./conversationsReply')

// module.exports = function (app) {
//     const ProtectedRouter = express.Router()

//     ProtectedRouter.get("/conversations", conversations)
//     ProtectedRouter.get("/conversations/:conversationId", conversationsDetail)
//     ProtectedRouter.get("/conversations/:conversationId/:message", conversationReply)
//     ProtectedRouter.post("/:userId", storeData)

//     app.use("/freshchat", ProtectedRouter)
// }