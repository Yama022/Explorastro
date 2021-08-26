module.exports = {
  user: (user) => ({
    id: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    avatar_url: user.avatar_url,
  }),

  exploration: (exploration) => ({
    id: exploration.id,
    name: exploration.name,
    image_url: exploration.image_url,
  }),

  comment: (comment) => ({
    id: comment.id,
    content: comment.content,
  }),
};
