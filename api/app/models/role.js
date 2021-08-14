const sequelize = require("../client");
const { DataTypes, Model } = require("sequelize");

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "role",
  }
);

module.exports = Role;
