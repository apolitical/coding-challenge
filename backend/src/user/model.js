'use strict';

const { Sequelize } = require('sequelize');

const database = require('../database');

const UserModel = database.define('users', {
  slug: {
    unique: true,
    allowNull: false,
    type: Sequelize.STRING,
  },
  favourites: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = { UserModel };
