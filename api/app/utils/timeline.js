const { mongo } = require('../database');

module.exports = {
  generate: async (user) => {
    const db = await mongo.connect();
    const followingIds = user.following.map((flwd) => flwd.id);
    const timelineEvents = await db.find({
      'concern.user': {
        $in: followingIds,
      },
      isUselessForTimeline: {
        $ne: true,
      },
    }).toArray();
    db.close();
    return timelineEvents;
  },
};
