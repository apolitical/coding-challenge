import { Context } from '../../types';
import { Request, Response } from 'express';

// import config from '../../config';
// const {
//   Errors: { ForbiddenError },
// } = require('finale-rest');

// const {
//   API: {
//     KEY,
//     HEADERS: { X_API_KEY },
//   },
// } = config;

export default (req: Request, res: Response, context: Context) => {
  return context.continue;
};
