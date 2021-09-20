const {
  errorMessageBuilderHelper,
} = require('../../../../../resources/error-handling/error-message-builder.helper');
const mongoDbErrorHelper = require('../../../../../resources/error-handling/mongo-db-error.helper');
const userRepository = require('../../infra/repositories/users.repository');

async function createUser(body) {
  const user = await userRepository.createUser(body);

  const { _id, name, email, role } = user;
  const result = { _id, name, email, role };

  return result;
}

function handleCreateUserError(error, response) {
  const duplicatedKeys = mongoDbErrorHelper.parseDuplicateKeyError(error);

  console.log(duplicatedKeys);

  if (!duplicatedKeys || duplicatedKeys[0] !== 'email') {
    return response.status(500).end();
  }

  return errorMessageBuilderHelper(response, 409, 'Email already registered');
}

async function createUserRequest(request, response) {
  try {
    const user = await createUser(request.body);

    response.status(201).send({
      user,
    });
  } catch (error) {
    handleCreateUserError(error, response);
  }
}

module.exports = { createUserRequest };
