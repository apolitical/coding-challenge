'use strict';

const cors = require('cors');
const { json } = require('body-parser');
const morgan = require('morgan');

async function load(app) {
  app.use(cors());
  app.use(json());
  app.use(morgan('tiny'));
}

module.exports = { load };
