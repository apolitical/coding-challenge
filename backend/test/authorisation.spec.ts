import { describe, jest, expect, beforeEach, test } from '@jest/globals';
import { Request, Response } from 'express';
import { Context } from '../src/types';
import * as fs from 'node:fs';

import { config as deConfig } from 'dotenv';
deConfig({ path: `${__dirname}/test.env` });

import authorisation from '../src/user/milestones/authorisation';

jest.mock('../src/config');
import config from '../src/config';

jest.mock('node:fs');

jest.mock('finale-rest', () => {
  const actual = jest.requireActual('finale-rest');
  return Object.assign({}, actual, { Errors: { ForbiddenError: Error } });
});

const {
  API: {
    KEY,
    HEADERS: { X_API_KEY },
  },
} = config;

describe('Authorisation Milestone', () => {
  const mockHeader = jest.fn();

  let req: Request;
  let res: Response;
  let context: Context;

  beforeEach(() => {
    req = { header: mockHeader } as unknown as Request;
    context = { continue: 'some-result' } as Context;
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    (fs.createWriteStream as jest.Mock).mockReturnValue({
      end: jest.fn(),
    });
    mockHeader.mockImplementation((key) => {
      switch (key) {
        case X_API_KEY:
          return KEY;
        case 'x-forwarded-for':
          return '127.0.0.1';
        case 'User-Agent':
          return 'Apolitical Browser';
        default:
          return null;
      }
    });
  });

  test('should return context continue', () => {
    const result = authorisation(req, res, context);
    expect(result).toEqual('some-result');
  });

  test('should call request header with x-api-key', () => {
    authorisation(req, res, context);
    expect(mockHeader).toHaveBeenCalledTimes(3);
    expect(mockHeader.mock.calls.pop()?.[0]).toBe(X_API_KEY);
  });

  test('should throw forbidden error when invalid API key', () => {
    mockHeader.mockImplementation(() => 'invalid-key');
    expect(() => {
      authorisation(req, res, context);
    }).toThrow('Wrong API key');
  });
});
