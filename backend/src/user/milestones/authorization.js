'use strict';

const {
  Errors: { ForbiddenError },
} = require('finale-rest');

const {
  API: {
    KEY,
    HEADERS: { X_API_KEY },
  },
} = require('../../config');

module.exports = (req, res, context) => {
  if (req.header(X_API_KEY) !== KEY) {
    throw new ForbiddenError('Wrong API key', ['header', X_API_KEY]);
  }

  return context.continue;
};
