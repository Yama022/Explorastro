const { sequelize } = require("../database");
const { DataTypes, Model } = require("sequelize");

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
      name: "avatar_URL",
      allowNull: true,
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
    tableName: "user",
  }
);

module.exports = User;
