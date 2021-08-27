const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class Token extends Model {}

Token.init(
  {
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'jwt_refresh_token',
  },
);

module.exports = Token;
