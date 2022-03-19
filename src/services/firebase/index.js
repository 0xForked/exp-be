const credentials = require("@configs/firebase.json")

const firebase = require("firebase-admin")

const client = function () {
  let instance

  if (!instance) {
    instance = firebase.initializeApp({
      credential: firebase.credential.cert(credentials)
    }, "[DEFAULT]")

    firebase
      .firestore()
      .settings({})
  }
  
  return instance
}

module.exports = client()