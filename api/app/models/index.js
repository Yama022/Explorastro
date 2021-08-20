const Role = require("./role");
const User = require("./user");
const Token = require("./token");
const Exploration = require("./exploration");
const Comment = require("./comment");

// User Role
Role.hasMany(User, {
  as: "users",
  foreignKey: "role_id",
});

User.belongsTo(Role, {
  as: "role",
  foreignKey: {
    name: "role_id",
    allowNull: false,
    defaultValue: 1,
  },
});

// User Token
User.hasMany(Token, {
  as: "tokens",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Token.belongsTo(User, {
  as: "user",
  foreignKey: {
    name: "user_id",
    allowNull: false,
    onDelete: "CASCADE",
  },
});

// User Followers
User.belongsToMany(User, {
  through: "user_has_followers",
  as: "following",
  foreignKey: "follower_id",
  otherKey: "user_id",
});

User.belongsToMany(User, {
  through: "user_has_followers",
  as: "followers",
  foreignKey: "user_id",
  otherKey: "follower_id",
});

// User Comments
User.hasMany(Comment, {
  as: "comments",
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  as: "author",
  foreignKey: {
    name: "author_id",
    allowNull: false,
    onDelete: "CASCADE",
  },
});

// User Exploration author
User.hasMany(Exploration, {
  as: "organized_explorations",
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Exploration.belongsTo(User, {
  as: "author",
  foreignKey: {
    name: "author_id",
    allowNull: false,
    onDelete: "CASCADE",
  },
});

// Explorations participants
Exploration.belongsToMany(User, {
  through: "exploration_has_users",
  as: "participants",
  foreignKey: "exploration_id",
  otherKey: "user_id",
});

User.belongsToMany(Exploration, {
  through: "exploration_has_users",
  as: "explorations",
  foreignKey: "user_id",
  otherKey: "exploration_id",
});

// Exploration comments
Exploration.belongsToMany(Comment, {
  through: "exploration_has_comments",
  as: "comments",
  foreignKey: "exploration_id",
  otherKey: "comment_id",
});

Comment.belongsToMany(Exploration, {
  through: "exploration_has_comments",
  as: "explorations",
  foreignKey: "comment_id",
  otherKey: "exploration_id",
});

module.exports = {
  Role,
  User,
  Token,
  Exploration,
  Comment,
};
