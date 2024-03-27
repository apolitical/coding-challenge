import { describe, jest, expect, beforeEach, test } from '@jest/globals';
import { Request, Response } from 'express';
import { Context } from '../src/types';

import authentication from '../src/user/milestones/authentication';
import config from '../src/config';

jest.mock('finale-rest', () => {
  const actual = jest.requireActual('finale-rest');
  return Object.assign({}, actual, { Errors: { BadRequestError: Error } });
});

const {
  API: {
    HEADERS: { X_SLUG },
    SLUGS: { MYSELF },
  },
} = config;

describe('Authentication Milestone', () => {
  const slug = 'c2VuaW9yLWNhbmRpZGF0ZQ==';
  const mockHeader = jest.fn();

  let req: Request;
  let res: Response;
  let context: Context;

  beforeEach(() => {
    req = {
      params: { slug: MYSELF },
      header: mockHeader,
    } as unknown as Request;
    context = { continue: 'some-result' } as unknown as Context;
    mockHeader.mockReturnValue(slug);
  });

  test('should return context continue (without myself slug)', () => {
    req.params.slug = 'some-slug';
    const result = authentication(req, res, context);
    expect(result).toEqual('some-result');
  });

  test('should return context continue (with myself slug)', () => {
    const result = authentication(req, res, context);
    expect(result).toEqual('some-result');
  });

  test('should call request header with x-slug', () => {
    authentication(req, res, context);
    expect(mockHeader).toHaveBeenCalledTimes(1);
    expect(mockHeader.mock.calls[0][0]).toEqual(X_SLUG);
  });

  test('should modify request slug param', () => {
    authentication(req, res, context);
    expect(req.params.slug).toEqual('senior-candidate');
  });

  test('should throw bad request error when no slug is present', () => {
    mockHeader.mockReturnValueOnce(null);
    expect(() => {
      authentication(req, res, context);
    }).toThrow('Missing user slug');
  });
});
