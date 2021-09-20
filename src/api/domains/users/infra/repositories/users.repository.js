const database = require('../../../../../resources/database');

async function getCollection() {
  return database.getCollection('users');
}

async function createUser(user) {
  const { name, email, password } = user;

  const users = await getCollection();
  return users
    .insertOne({
      name,
      email,
      password,
      role: 'user',
    })
    .then((result) => result.ops[0]);
}

async function createIndexes() {
  const users = await getCollection();
  return users.createIndex({ email: 1 }, { unique: true });
}

module.exports = { createUser, createIndexes };
