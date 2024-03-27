import { config } from 'dotenv';
config();

import { start } from './server';

(async function quickstart() {
  await start();
  console.info('Backend started...');
})();
