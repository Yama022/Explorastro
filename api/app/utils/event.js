const { userEvent } = require("../services");
const { mongo } = require("./app/database");
const db = await mongo.connect();

module.exports = {
  saveUserAction: (action, user, data) => {
    switch (action) {
      case "follow":
        db.insertOne({
          type: action,
          follower: userEvent.format(user),
          followed: userEvent.format(data),
        });
    }
  },
};
