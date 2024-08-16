import express from 'express';
import { createHttpTerminator, HttpTerminator } from 'http-terminator';

import { load as loadMiddleware } from './loaders/middlewares';
import { load as loadResources } from './loaders/resources';

import config from '../config';

const {
  API: { PORT },
} = config;

let terminator: HttpTerminator;

async function run(app: any) {
  return new Promise<void>((resolve, reject) => {
    // Start listening for request
    const server = app.listen(PORT, (err: Error) => {
      if (err) reject(err);
      resolve();
    });
    // Assign terminator
    terminator = createHttpTerminator({ server });
  });
}

export async function start() {
  // Create express app
  const app = express();
  // Load middlewares
  await loadMiddleware(app);
  // Load resources
  await loadResources(app);
  // Run app
  await run(app);
  return app;
}

export async function stop() {
  // Terminate app
  await terminator.terminate();
}
