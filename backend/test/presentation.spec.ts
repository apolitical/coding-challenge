import { describe, jest, expect, beforeEach, test } from '@jest/globals';
import { Request, Response } from 'express';
import { Context } from '../src/types';
import config from '../src/config';
import presentation from '../src/user/milestones/presentation';

const mockGet = jest.fn() as jest.MockedFunction<any>;

jest.mock('axios', () => ({
  get: (url: string) => mockGet(url),
}));

const {
  STAR_WARS_API: {
    BASE_URL,
    ENDPOINTS: { PEOPLE },
  },
} = config;

describe('Presentation Milestone', () => {
  const favourites = ['1', '2'];
  const favouritesDetails = [{ name: 'name-1' }, { name: 'name-2' }];

  let req: Request;
  let res: Response;
  let context: Context;

  beforeEach(() => {
    context = {
      continue: 'some-result',
      instance: { dataValues: { favourites } },
    };
    mockGet.mockResolvedValueOnce({ data: favouritesDetails[0] }).mockResolvedValueOnce({ data: favouritesDetails[1] });
  });

  test('should return context continue', async () => {
    const result = await presentation(req, res, context);
    expect(result).toEqual('some-result');
  });

  test('should call Star Wars API', async () => {
    await presentation(req, res, context);
    expect(mockGet).toHaveBeenCalledTimes(2);
    expect(mockGet.mock.calls[0][0]).toEqual(`${BASE_URL}/${PEOPLE}/1`);
    expect(mockGet.mock.calls[1][0]).toEqual(`${BASE_URL}/${PEOPLE}/2`);
  });

  test('should add favourites details to the context', async () => {
    await presentation(req, res, context);
    expect(context.instance.dataValues.favouritesDetails).toEqual(favouritesDetails);
  });
});
