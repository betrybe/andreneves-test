const database = require('../resources/database');
const app = require('./app');

const PORT = 3000;

async function startServer() {
  await database.getConnection();

  app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
}

startServer();
