const credentials = require("@configs/credentials.json")

module.exports = require('nodemailer')
  .createTransport(credentials.email);

// * example usage 
// 
// const email = required('self.file')
// email.sendMail({
//   from: 'sender@gmail.com',
//   to: 'recipient@gmail.com',
//   subject: 'That was easy!',
//   text: 'Sending Email using Node.js'
// }, (err, info) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(info)
//   }
// })
