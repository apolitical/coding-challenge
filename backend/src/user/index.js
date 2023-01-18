'use strict';

const finale = require('finale-rest');

const { UserModel } = require('./model');
const milestones = require('./milestones');

const {
  API: {
    ENDPOINTS: { USERS },
  },
} = require('../config');

function initialize() {
  const userResource = finale.resource({
    model: UserModel,
    endpoints: USERS,
  });
  userResource.use(milestones);
}

module.exports = { initialize };
