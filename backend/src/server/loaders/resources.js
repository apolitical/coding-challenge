'use strict';

const finale = require('finale-rest');

const database = require('../../database');
const user = require('../../user');

async function load(app) {
  // Initialize Finale REST
  finale.initialize({
    app: app,
    sequelize: database,
  });
  // Define User resource
  user.initialize();
  // Synchronise database
  await database.sync();
}

module.exports = { load };
