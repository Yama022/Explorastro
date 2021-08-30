const { mongo } = require('../database');

module.exports = {
  generate: async (user) => {
    const db = await mongo.connect();
    const followingIds = user.following.map((flwd) => flwd.id);
    
    // We want to retrieve all the events related to our social circle
    // Except for the events concerning us also, for example WE followed HIM
    // And sort them by date
    const timelineEvents = await db.find({
      'concern.user': {
        $in:followingIds,
        $nin:user.id,
      },
      isUselessForTimeline: {
        $ne: true,
      },
    }).sort({"date.createdAt": -1}).toArray();

    db.close();
    return timelineEvents;
  },
};
