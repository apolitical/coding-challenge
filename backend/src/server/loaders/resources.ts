const finale = require('finale-rest');

import database from '../../database';
import { initialize as userInitialize } from '../../user';

export async function load(app: any) {
  // Initialize Finale REST
  finale.initialize({
    app: app,
    sequelize: database,
  });
  // Define User resource
  userInitialize();
  // Synchronise database
  await database.sync();
}
