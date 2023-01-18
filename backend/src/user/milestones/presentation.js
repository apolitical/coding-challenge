'use strict';

const axios = require('axios');

const {
  STAR_WARS_API: {
    BASE_URL,
    ENDPOINTS: { PEOPLE },
  },
} = require('../../config');

module.exports = async (req, res, context) => {
  const favouritesDetails = [];
  const { favourites } = context.instance.dataValues;
  for (const favourite of favourites) {
    const response = await axios.get(`${BASE_URL}/${PEOPLE}/${favourite}`);
    favouritesDetails.push(response.data);
  }
  Object.assign(context.instance.dataValues, { favouritesDetails });
  return context.continue;
};
