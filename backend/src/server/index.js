'use strict';

const express = require('express');
const { createHttpTerminator } = require('http-terminator');

const middlewares = require('./loaders/middlewares');
const resources = require('./loaders/resources');

const {
  API: { PORT },
} = require('../config');

let terminator;

async function run(app) {
  return new Promise((resolve, reject) => {
    // Start listening for request
    const server = app.listen(PORT, (err) => {
      if (err) reject(err);
      resolve();
    });
    // Assign terminator
    terminator = createHttpTerminator({ server });
  });
}

async function start() {
  // Create express app
  const app = express();
  // Load middlewares
  await middlewares.load(app);
  // Load resources
  await resources.load(app);
  // Run app
  await run(app);
  return app;
}

async function stop() {
  // Terminate app
  await terminator.terminate();
}

module.exports = { start, stop };
