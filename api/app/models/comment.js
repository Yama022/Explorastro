const sequelize = require("../client");
const { DataTypes, Model } = require("sequelize");

class Comment extends Model {}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "comment",
  }
);

module.exports = Comment;
