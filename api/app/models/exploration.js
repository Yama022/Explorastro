const sequelize = require("../client");
const { DataTypes, Model } = require("sequelize");

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
    },
    max_participants: {
      type: DataTypes.INTEGER,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image_url: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "exploration",
  }
);

module.exports = Exploration;
