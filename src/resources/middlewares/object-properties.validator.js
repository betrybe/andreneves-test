const {
  errorMessageBuilderHelper,
} = require('../error-handling/error-message-builder.helper');

const defaultMessage = 'Invalid entries. Try again.';

function objectPropertiesValidator(rule, message) {
  return (request, response, next) => {
    const isValid = rule(request.body);

    if (isValid) {
      return next();
    }

    return errorMessageBuilderHelper(response, 400, message || defaultMessage);
  };
}

module.exports = { objectPropertiesValidator };
