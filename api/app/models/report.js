const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database");

class Report extends Model {}

Report.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    object: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "report",
  }
);

module.exports = Report;
