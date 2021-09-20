const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';
const DB_NAME = 'Cookmaster';

let dbConnection;

async function getConnection() {
  if (dbConnection) {
    return dbConnection;
  }

  const connection = await MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  dbConnection = connection.db(DB_NAME);
  return dbConnection;
}

async function getCollection(name) {
  const connection = await getConnection();
  return connection.collection(name);
}

module.exports = { getConnection, getCollection };
