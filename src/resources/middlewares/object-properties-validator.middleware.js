const {
  errorMessageBuilderHelper,
} = require('../error-handling/error-message-builder.helper');

const defaultStatusCode = 400;
const defaultMessage = 'Invalid entries. Try again.';

function objectPropertiesValidator(rule, statusCode, message) {
  return (request, response, next) => {
    const isValid = rule(request.body);

    if (isValid) {
      return next();
    }

    return errorMessageBuilderHelper(
      response,
      statusCode || defaultStatusCode,
      message || defaultMessage,
    );
  };
}

module.exports = { objectPropertiesValidator };
