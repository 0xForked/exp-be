const firebase = require("firebase-admin")
const firebaseCredentials = require("../../../firebase.json")

const createClient = function () {
  let instance

  if (!instance) {
    instance = firebase.initializeApp({
      credential: firebase.credential.cert(firebaseCredentials)
    }, "[DEFAULT]")

    const firestoreSettings = {}
    
    firebase
      .firestore()
      .settings(firestoreSettings)
  }
  
  return instance
}

module.exports = createClient()