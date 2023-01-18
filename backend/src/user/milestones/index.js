'use strict';

const authorization = require('./authorization');
const authentication = require('./authentication');
const presentation = require('./presentation');

module.exports = {
  all: {
    auth: authorization,
  },
  read: {
    fetch: {
      before: authentication,
    },
    send: {
      before: presentation,
    },
  },
  update: {
    fetch: {
      before: authentication,
    },
  },
};
