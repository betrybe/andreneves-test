const {
  errorMessageBuilderHelper,
} = require('../../../../../resources/error-handling/error-message-builder.helper');
const userRepository = require('../../infra/repositories/users.repository');

async function createUser(body) {
  const user = await userRepository.createUser(body);

  const { _id, name, email, role } = user;
  const result = { _id, name, email, role };

  return result;
}

function handleCreateUserError(error, response) {
  return errorMessageBuilderHelper(response, error.code || 500, error.message);
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
