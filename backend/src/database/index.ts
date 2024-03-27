import { Sequelize } from 'sequelize';
import config from '../config';

const {
  DB: {
    URI,
    OPTIONS: { LOGGING, RETRY },
  },
} = config;

const database = new Sequelize(URI, {
  logging: LOGGING,
  retry: RETRY,
});

export default database;
