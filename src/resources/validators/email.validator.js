// Reference: https://regexr.com/3e48o
const regexExp = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function validateEmail(email) {
  if (!email) {
    return false;
  }

  return email.match(regexExp);
}

module.exports = { validateEmail };
