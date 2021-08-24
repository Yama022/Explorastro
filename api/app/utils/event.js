const { userEvent } = require("../services");
const { mongo } = require("../database");
const { eventTypes } = require("../constants");

const getEventData = () => {
  return {
    type: action,
    date: new Date(),
  };
};

module.exports = {
  saveUserAction: async (action, user, data) => {
    const db = await mongo.connect();

    switch (action) {
      case eventTypes.user.FOLLOW:
        await db.insertOne({
          ...getEventData(),
          concernedUsers: [user.id],
          follower: userEvent.format(user),
          followed: userEvent.format(data),
          message: {
            fr: `${user.username} a commencé à suivre ${data.username}`,
            en: `${user.username} started following ${data.username}`,
          },
        });
        break;
      case eventTypes.user.UNFOLLOW:
        await db.insertOne({
          ...getEventData(),
          concernedUsers: [user.id],
          follower: userEvent.format(user),
          unfollowed: userEvent.format(data),
          message: {
            fr: `${user.username} a arrêté à suivre ${data.username}`,
            en: `${user.username} stopped following ${data.username}`,
          },
        });
        break;
      case eventTypes.user.COMMENT:
        await db.insertOne({
          ...getEventData(),
          concernedUsers: [user.id],
          author: userEvent.format(user),
          exploration: userEvent.format(data),
          comment: data.comment,
          message: {
            fr: `${user.username} a commenté ${data.name}`,
            en: `${user.username} commented ${data.username}`,
          },
        });
        break;
      case eventTypes.user.EDIT_COMMENT:
        await db.insertOne({
          ...getEventData(),
          concernedUsers: [user.id],
          author: userEvent.format(user),
          exploration: userEvent.format(data),
          comment: data.comment,
          message: {
            fr: `${user.username} a modifié son commentaire sur ${data.name}`,
            en: `${user.username} modified his comment on ${data.username}`,
          },
        });
        break;
      case eventTypes.user.DELETE_COMMENT:
        await db.insertOne({
          ...getEventData(),
          concernedUsers: [user.id, data.id],
          author: userEvent.format(user),
          exploration: userEvent.format(data),
          message: {
            fr: `${user.username} a supprimé son commentaire sur ${data.name}`,
            en: `${user.username} modified his comment on ${data.username}`,
          },
        });
        break;
      default:
        break;
    }
    db.close();
  },
};
