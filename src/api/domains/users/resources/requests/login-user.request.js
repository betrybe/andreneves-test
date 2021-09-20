const jwt = require('../../../../../resources/authentication/jwt');
const {
  errorMessageBuilderHelper,
} = require('../../../../../resources/error-handling/error-message-builder.helper');
const userRepository = require('../../infra/repositories/users.repository');

async function loginUser(body) {
  const { email, password } = body;

  const user = await userRepository.getUserByEmail(email);

  if (!user || user.password !== password) {
    return null;
  }

  return user;
}

function createToken(user) {
  const { _id, email, role } = user;
  return jwt.sign({ _id, email, role });
}

async function loginUserRequest(request, response) {
  try {
    const user = await loginUser(request.body);

    if (!user) {
      return errorMessageBuilderHelper(
        response,
        401,
        'Incorrect username or password',
      );
    }

    const token = createToken(user);
    response.status(200).send({ token });
  } catch (error) {
    return response.status(500).end();
  }
}

module.exports = { loginUserRequest };
