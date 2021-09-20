const express = require('express');
const {
  objectPropertiesValidator,
} = require('../../../../resources/middlewares/object-properties-validator.middleware');
const { createUserRule } = require('../domain/rules/create-user.rule');
const { createUserRequest } = require('./requests/create-user.request');

const router = express.Router();

router.post('/', objectPropertiesValidator(createUserRule), createUserRequest);

function userResource(app) {
  return app.use('/users', router);
}

module.exports = { userResource };
