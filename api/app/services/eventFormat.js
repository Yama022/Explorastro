module.exports = {
  user: (user) => {
    return {
      id: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      avatar_url: user.avatar_url,
    };
  },

  exploration: (exploration) => {
    return {
      id: exploration.id,
      name: exploration.name,
      image_url: exploration.image_url,
    };
  },

  comment: (comment) => {
    return {
      id: comment.id,
      content: comment.content,
    };
  },
};
