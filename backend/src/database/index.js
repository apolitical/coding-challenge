'use strict';

const { Sequelize } = require('sequelize');

const {
  DB: {
    URI,
    OPTIONS: { LOGGING, RETRY },
  },
} = require('../config');

const database = new Sequelize(URI, {
  logging: LOGGING,
  retry: RETRY,
});

module.exports = database;
