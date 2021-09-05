const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class User extends Model {}

// Never return the user's password hash
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

User.init(
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.TEXT,
      name: 'avatar_URL',
      allowNull: true,
      defaultValue: 'https://s3-explorastro.s3.us-east-2.amazonaws.com/1630856500282-313912004.jpg',
    },
    bio: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.TEXT,
    },
    zipcode: {
      type: DataTypes.TEXT,
    },
    twitter: {
      type: DataTypes.TEXT,
    },
    instagram: {
      type: DataTypes.TEXT,
    },
    facebook: {
      type: DataTypes.TEXT,
    },
    tiktok: {
      type: DataTypes.TEXT,
    },
    astrobin: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: 'user',
    // Never return user password, even if someone tries to get the user
    // Send role by default for checking if user is admin
    defaultScope: {
      include: ['role']
    },
  },
);

module.exports = User;
