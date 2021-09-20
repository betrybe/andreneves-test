const database = require('../resources/database');
const userRepository = require('./domains/users/infra/repositories/users.repository');
const app = require('./app');

const PORT = 3000;

async function startServer() {
  await database.getConnection();
  await userRepository.createIndexes();

  app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
}

startServer();
