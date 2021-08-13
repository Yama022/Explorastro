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
      allowNull: false,
    },
    geog: {
      type: DataTypes.GEOGRAPHY,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    max_participants: {
      type: DataTypes.INTEGER,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
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
