const express = require('express');
const {
  objectPropertiesValidator,
} = require('../../../../resources/middlewares/object-properties-validator.middleware');
const { loginUserRule } = require('../domain/rules/login-user.rule');
const { loginUserRequest } = require('./requests/login-user.request');

const router = express.Router();

router.post(
  '/',
  objectPropertiesValidator(loginUserRule, 401, 'All fields must be filled'),
  loginUserRequest,
);

function loginResource(app) {
  return app.use('/login', router);
}

module.exports = { loginResource };
