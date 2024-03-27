import { describe, jest, expect, beforeEach, test } from '@jest/globals';
import { Request, Response } from 'express';
import { Context } from '../src/types';

import authorization from '../src/user/milestones/authorization';
import config from '../src/config';

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

describe.skip('Authorization Milestone', () => {
  const mockHeader = jest.fn();

  let req: Request;
  let res: Response;
  let context: Context;

  beforeEach(() => {
    req = { header: mockHeader } as unknown as Request;
    context = { continue: 'some-result' } as Context;
    mockHeader.mockReturnValue(KEY);
  });

  test('should return context continue', () => {
    const result = authorization(req, res, context);
    expect(result).toEqual('some-result');
  });

  test('should call request header with x-api-key', () => {
    authorization(req, res, context);
    expect(mockHeader).toHaveBeenCalledTimes(1);
    expect(mockHeader.mock.calls[0][0]).toEqual(X_API_KEY);
  });

  test('should throw forbiden error when invalide API key', () => {
    mockHeader.mockReturnValueOnce(null);
    expect(() => {
      authorization(req, res, context);
    }).toThrow('Wrong API key');
  });
});
