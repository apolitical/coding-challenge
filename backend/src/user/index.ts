const finale = require('finale-rest'); // No types available for this package

import config from '../config';
import UserModel from './model';

const milestones = require('./milestones');

const {
  API: {
    ENDPOINTS: { USERS },
  },
} = config;

export function initialize() {
  const userResource = finale.resource({
    model: UserModel,
    endpoints: USERS,
  });
  userResource.use(milestones);
}
