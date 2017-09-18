const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

// const dirname = __dirname;

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(port, () => {
  console.log('Servidor rodando na porta 3000');
});
