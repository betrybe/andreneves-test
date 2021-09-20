const express = require('express');
const {
  objectPropertiesValidator,
} = require('../../../../resources/middlewares/object-properties-validator.middleware');
const { createUserRule } = require('../domain/rules/create-user.rule');
const { createUserRequest } = require('./requests/create-user.request');

const RESOURCE_NAME = 'users';
const router = express.Router();

router.post('/', objectPropertiesValidator(createUserRule), createUserRequest);

function userResource(app) {
  return app.use(`/${RESOURCE_NAME}`, router);
}

module.exports = { userResource };
