const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class PasswordToken extends Model {}

PasswordToken.init(
  {
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'password_token',
  },
);

module.exports = PasswordToken;
