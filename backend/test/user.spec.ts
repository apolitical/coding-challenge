import { describe, jest, expect, beforeAll, afterAll, test } from '@jest/globals';
import { config as deConfig } from 'dotenv';
deConfig({ path: `${__dirname}/test.env` });

import request, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';

jest.mock('../src/config');

import config from '../src/config';

const { KEY } = config.API;

describe('Auth Milestone', () => {
  let agent: TestAgent<Test>;
  let server: any;
  let database: any;

  // TODO: fix this beforeAll
  beforeAll(async () => {
    database = await import('./helpers/database');
    await database.start();
    server = await import('../src/server');


    const app = await server.start();
    agent = request.agent(app);
    agent.set({ 'x-api-key': KEY });
  });

  afterAll(async () => {
    await server.stop();
    await database.stop();
  });

  describe('List Operation - GET /users', () => {
    test('should return empty array', async () => {
      const res = await agent.get('/users');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });
  });
});
