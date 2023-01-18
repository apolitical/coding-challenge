'use strict';

require('dotenv').config();

const { start } = require('./src/server');

(async function quickstart() {
  await start();
  console.info('Backend started...');
})();
