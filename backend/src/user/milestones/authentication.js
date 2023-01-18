'use strict';

const {
  Errors: { BadRequestError },
} = require('finale-rest');

const {
  API: {
    SLUGS: { MYSELF },
  },
} = require('../../config');

const slugHeader = 'x-slug';

module.exports = (req, res, context) => {
  if (req.params.slug === MYSELF) {
    const encodedSlug = req.header(slugHeader);
    if (!encodedSlug) {
      throw new BadRequestError('Missing user slug', ['header', slugHeader]);
    }
    req.params.slug = Buffer.from(encodedSlug, 'base64').toString('ascii');
  }
  return context.continue;
};
