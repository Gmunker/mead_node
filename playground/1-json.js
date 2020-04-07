const fs = require('fs')

const info = JSON.parse(fs.readFileSync('./1-json.json').toString())

info.name = "Greg"
info.age = 40

fs.writeFileSync('1-json.json', JSON.stringify(info))

