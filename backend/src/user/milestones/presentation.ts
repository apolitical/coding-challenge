import axios from 'axios';
import config from '../../config';
import { Request, Response } from 'express';
import { Context } from '../../types';

const {
  STAR_WARS_API: {
    BASE_URL,
    ENDPOINTS: { PEOPLE },
  },
} = config;

export default async (req: Request, res: Response, context: Context) => {
  const favouritesDetails = [];
  const { favourites } = context.instance.dataValues;

  if (favourites) {
    for (const favourite of favourites) {
      const response = await axios.get(`${BASE_URL}/${PEOPLE}/${favourite}`);
      favouritesDetails.push(response.data);
    }
  }

  Object.assign(context.instance.dataValues, { favouritesDetails });
  return context.continue;
};
