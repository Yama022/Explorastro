const { eventFormat } = require("../services");
const { mongo } = require("../database");
const { EVENT } = require("../constants");

module.exports = {
  saveUserAction: async (action, user, data) => {
    const db = await mongo.connect();

    const getEventData = () => {
      const label = action.label;
      return {
        action: EVENT.ACTION[label].label,
        type: EVENT.ACTION[label].type,
        date: new Date(),
      };
    };

    switch (action) {
      case EVENT.ACTION.FOLLOW:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id, data.user.id],
          },
          uselessFor: [user.id],
          follower: eventFormat.user(user),
          followed: eventFormat.user(data.user),
          message: { ...EVENT.MESSAGES.FOLLOW },
        });
        break;
      case EVENT.ACTION.UNFOLLOW:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id, data.user.id],
          },
          isUselessForTimeline: true,
          follower: eventFormat.user(user),
          unfollowed: eventFormat.user(data.user),
          message: { ...EVENT.MESSAGES.UNFOLLOW },
        });
        break;
      case EVENT.ACTION.COMMENT:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          uselessFor: [user.id],
          author: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          comment: eventFormat.comment(data.comment),
          message: { ...EVENT.MESSAGES.COMMENT },
        });
        break;
      case EVENT.ACTION.EDIT_COMMENT:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          author: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          comment: eventFormat.comment(data.comment),
          message: { ...EVENT.MESSAGES.EDIT_COMMENT },
        });
        break;
      case EVENT.ACTION.DELETE_COMMENT:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          author: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          message: { ...EVENT.MESSAGES.DELETE_COMMENT },
        });
        break;
      default:
        break;
    }
  },
};
