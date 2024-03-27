const {
  Errors: { BadRequestError },
} = require('finale-rest');

import { Request, Response } from 'express';
import config from '../../config';
import { Context } from '../../types';

const {
  API: {
    SLUGS: { MYSELF },
  },
} = config;

const slugHeader = 'x-slug';

export default (req: Request, res: Response, context: Context) => {
  if (req.params.slug === MYSELF) {
    const encodedSlug = req.header(slugHeader);
    if (!encodedSlug) {
      throw new BadRequestError('Missing user slug', ['header', slugHeader]);
    }
    req.params.slug = Buffer.from(encodedSlug, 'base64').toString('ascii');
  }
  return context.continue;
};
