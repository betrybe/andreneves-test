function errorMessageBuilderHelper(response, statusCode, message) {
  return response.status(statusCode).json({ message });
}

module.exports = { errorMessageBuilderHelper };
