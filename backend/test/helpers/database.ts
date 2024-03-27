import { GenericContainer, StartedTestContainer } from 'testcontainers';

import config from '../../src/config';

const { DB_USER, DB_PWD, DB_PORT, DB_NAME } = process.env;

let dbInstance: StartedTestContainer;

export async function start() {
  // Create database
  const dbImage = new GenericContainer('postgres:11')
    .withEnv('POSTGRES_DB', DB_NAME as string)
    .withEnv('POSTGRES_USER', DB_USER as string)
    .withEnv('POSTGRES_PASSWORD', DB_PWD as string)
    .withExposedPorts(parseInt(DB_PORT as string));
  dbInstance = await dbImage.start();
  // Update configs
  const dbPort = dbInstance.getMappedPort(parseInt(DB_PORT as string));
  const dbHost = dbInstance.getHost();
  const URI = `postgres://${DB_USER}:${DB_PWD}@${dbHost}:${dbPort}/${DB_NAME}`;
  Object.assign(config.DB, { URI });
}

export async function stop() {
  if (dbInstance) {
    await dbInstance.stop({
      removeVolumes: true,
    });
  }
}
