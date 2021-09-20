const jwt = require('jsonwebtoken');

const SECRET = 'hVX63pifgn7EwYZZHv1ESQsmT8legEx_b2hj';

function sign(payload) {
  return jwt.sign(payload, SECRET);
}

module.exports = { sign };
