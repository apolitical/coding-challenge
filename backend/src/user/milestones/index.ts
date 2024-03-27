import authentication from './authentication';
import authorization from './authorization';
import presentation from './presentation';

export default {
  all: {
    auth: authorization,
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
