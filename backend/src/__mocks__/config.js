'use strict';

module.exports = {
  API: {
    ENDPOINTS: {
      USERS: ['/users', '/users/:slug'],
    },
    HEADERS: {
      X_API_KEY: 'x-api-key',
      X_SLUG: 'x-slug',
    },
    PORT: 3000,
    KEY: 'key',
    SLUGS: {
      MYSELF: 'me',
    },
  },
  STAR_WARS_API: {
    BASE_URL: 'https://swapi.dev/api',
    ENDPOINTS: {
      PEOPLE: 'people',
    },
  },
  DB: {
    URI: `postgres://user:password@host:port/db`,
    OPTIONS: {
      LOGGING: false,
      RETRY: {},
    },
  },
};
