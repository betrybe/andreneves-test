const database = require('../../../../../resources/database');
const mongoDbErrorHelper = require('../../../../../resources/error-handling/mongo-db-error.helper');

async function getCollection() {
  return database.getCollection('users');
}

function handleCreateUserError(error) {
  const duplicatedKeys = mongoDbErrorHelper.parseDuplicateKeyError(error);

  if (!duplicatedKeys || duplicatedKeys[0] !== 'email') {
    throw new Error();
  }

  const emailError = new Error('Email already registered');
  emailError.code = 409;

  throw emailError;
}

async function createUser(user) {
  const { name, email, password } = user;

  const users = await getCollection();
  return users
    .insertOne({ name, email, password, role: 'user' })
    .then((result) => result.ops[0])
    .catch(handleCreateUserError);
}
}

async function createIndexes() {
  const users = await getCollection();
  return users.createIndex({ email: 1 }, { unique: true });
}

module.exports = { createUser, createIndexes };
