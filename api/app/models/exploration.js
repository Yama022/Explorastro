const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class Exploration extends Model {}

Exploration.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    geog: {
      type: DataTypes.GEOGRAPHY,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    max_participants: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      min: 1,
      max: 100
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image_url: {
      type: DataTypes.TEXT,
      defaultValue: 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856794055-151662587.jpeg',
    },
  },
  {
    sequelize,
    tableName: 'exploration',
  },
);

module.exports = Exploration;
