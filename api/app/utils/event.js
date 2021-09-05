/* eslint-disable no-console */
const { eventFormat } = require("../services");
const { mongo } = require("../database");
const { EVENT } = require("../constants");
const date = require("./date");

module.exports = {
  saveUserAction: async (action, user, data) => {
    const db = await mongo.connect();
    const getEventData = () => {
      const { label } = action;
      const createdDate = date.getDate();
      return {
        action: EVENT.ACTION[label].label,
        type: EVENT.ACTION[label].type,
        date: {
          createdAt: createdDate,
          locales: {
            fr: date.format(createdDate, "fr"),
            en: date.format(createdDate, "en"),
          },
        },
      };
    };

    switch (action) {
      case EVENT.ACTION.FOLLOW:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id, data.user.id],
          },
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
      case EVENT.ACTION.PARTICIPATION_ADD:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          exploration_date: {
            at: data.exploration.date,
            locales: {
              fr: date.format(data.exploration.date, "fr"),
              en: date.format(data.exploration.date, "en"),
            },
          },
          message: { ...EVENT.MESSAGES.PARTICIPATION_ADD },
        });
        break;
      case EVENT.ACTION.PARTICIPATION_REMOVED:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          message: { ...EVENT.MESSAGES.PARTICIPATION_REMOVED },
        });
        break;
      case EVENT.ACTION.CREATE_EXPLORATION:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          exploration_date: {
            at: data.exploration.date,
            locales: {
              fr: date.format(data.exploration.date, "fr"),
              en: date.format(data.exploration.date, "en"),
            },
          },
          message: { ...EVENT.MESSAGES.CREATE_EXPLORATION },
        });
        break;
      case EVENT.ACTION.EDIT_EXPLORATION:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          exploration_date: {
            at: data.exploration.date,
            locales: {
              fr: date.format(data.exploration.date, "fr"),
              en: date.format(data.exploration.date, "en"),
            },
          },
          message: { ...EVENT.MESSAGES.EDIT_EXPLORATION },
        });
        break;
      case EVENT.ACTION.PUBLISH_EXPLORATION:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          exploration_date: {
            at: data.exploration.date,
            locales: {
              fr: date.format(data.exploration.date, "fr"),
              en: date.format(data.exploration.date, "en"),
            },
          },
          message: { ...EVENT.MESSAGES.PUBLISH_EXPLORATION },
        });
        break;
      case EVENT.ACTION.DELETE_EXPLORATION:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
            exploration: [data.exploration.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          exploration: eventFormat.exploration(data.exploration),
          message: { ...EVENT.MESSAGES.DELETE_EXPLORATION },
        });
        break;
      case EVENT.ACTION.SIGN_UP:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          message: { ...EVENT.MESSAGES.SIGN_UP },
        });
        break;
      case EVENT.ACTION.UPDATE_AVATAR:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
          },
          user: eventFormat.user(user),
          lastAvatarURL: data.lastAvatarURL,
          message: { ...EVENT.MESSAGES.UPDATE_AVATAR },
        });
        break;
      case EVENT.ACTION.UPDATE_BIO:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
          },
          user: eventFormat.user(user),
          content: user.bio,
          message: { ...EVENT.MESSAGES.UPDATE_BIO },
        });
        break;
      case EVENT.ACTION.UPDATE_USER:
        await db.insertOne({
          ...getEventData(),
          concern: {
            user: [user.id],
          },
          isUselessForTimeline: true,
          user: eventFormat.user(user),
          message: { ...EVENT.MESSAGES.UPDATE_USER },
        });
        break;
      default:
        break;
    }
    db.close();
  },
};
