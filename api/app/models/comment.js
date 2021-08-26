const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

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
    tableName: 'comment',
  },
);

module.exports = Comment;
