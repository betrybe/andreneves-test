const {
  validateEmail,
} = require('../../../../../resources/validators/email.validator');

function createUserRule(user) {
  if (!user.name || !user.email || !user.password) {
    return false;
  }

  if (!validateEmail(user.email)) {
    return false;
  }

  return true;
}

module.exports = { createUserRule };
