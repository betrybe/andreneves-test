const express = require('express');
const path = require('path');

const { userResource } = require('./domains/users/resources/users.resource');

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

userResource(app);

module.exports = app;
