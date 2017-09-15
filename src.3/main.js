// ARROWS FUNCTIONS 

let express = require('express')
let app = express()
let port = 3000
var path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log('Servidor rodando na porta 3000')
})


