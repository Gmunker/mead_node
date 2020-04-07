const https = require('https');

const url = `https://api.darksky.net/forecast/fdab56c01729ed399812059cfceac1f7/40, -115`;

const request = https.request(url, (response) => {
  let data = "";
  response.on('data', (chunk) => {
    data = data + chunk.toString()

  })

  response.on('end', () => {
    console.log(JSON.parse(data))
  })
})

request.on('error', error => {
  console.log('An Error', error)
})

request.end()
