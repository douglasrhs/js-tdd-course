const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/src/index.html`));
});

app.listen(port, () => {
  console.log('Servidor rodando na porta 3000');
});
