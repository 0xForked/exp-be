const fa = require('@services/firebase')
var fs = require('fs')

module.exports = function(req, res) {
  if (!req.body.hasOwnProperty('base64string_audio')) {
    return res.send({ 
      code: 422, 
      message: "UNPROCESSABLE_ENTITY" 
    })
  }
  
  return processEvent(req, res)
}

async function processEvent(req, res) {
  const bucket = fa.storage().bucket()
  
  const fileName = `./temp/${new Date().getTime()}.wav`
  saveFile(req.body.base64string_audio, fileName);

  await bucket
    .upload(fileName, { public: true })
    .then(data => {
      removeFile(fileName)
      res.status(200).send({
        cdn: data[0].metadata.mediaLink
      })
    })
    .catch(err => {
      removeFile(fileName)
      res.status(err.code).send(err)
    })
}


function saveFile(raw, name) {
  const buffer = Buffer.from(raw.split('base64,')[1], 'base64')
  fs.writeFileSync(name, buffer)
  console.log(`wrote ${name} (${buffer.byteLength.toLocaleString()}) bytes to file.`)
}

function removeFile(name) {
  if (fs.existsSync(name)) {
    fs.unlinkSync(name)
  }
}