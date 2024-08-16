import { Context } from '../../types';
import { Request, Response } from 'express';

import config from '../../config';
import * as fs from 'node:fs';

const {
  Errors: { ForbiddenError },
} = require('finale-rest');

const {
  API: {
    KEY,
    HEADERS: { X_API_KEY },
  },
} = config;

export default (req: Request, res: Response, context: Context) => {
  try {
    // Read the IP, user agent and timestamp
    const ip = req.header('x-forwarded-for') || req?.connection?.remoteAddress;
    const userAgent = req.header('User-Agent');
    const timestamp = new Date().toISOString();
    const logLine = `${ip} ${userAgent} ${timestamp}`;

    // If the file doesn't exist, create it
    if (!fs.existsSync('src/logs/access.log')) {
      // create file
      const stream = fs.createWriteStream('src/logs/access.log');
      stream.end();
    }

    // Append to the file
    fs.appendFileSync('src/logs/access.log', logLine + '\n');
  } catch (error) {
    // Carry on if request fails
    console.error('Error while trying to log request:', error);
  }

  // Check if API key matches with what's in the header
  if (req.header(X_API_KEY) !== KEY) {
    throw new ForbiddenError('Wrong API key');
  }
  return context.continue;
};
