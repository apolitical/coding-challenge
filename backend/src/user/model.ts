import { DataTypes } from 'sequelize';
import database from '../database';

const UserModel = database.define('users', {
  slug: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  favourites: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

export default UserModel;
