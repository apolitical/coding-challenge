import authentication from './authentication';
import authorisation from './authorisation';
import presentation from './presentation';

export default {
  all: {
    auth: authorisation,
  },
  read: {
    fetch: {
      before: authentication,
    },
    send: {
      before: presentation,
    },
  },
  update: {
    fetch: {
      before: authentication,
    },
  },
};
