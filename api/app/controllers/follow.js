const { errorMessage } = require("../constants");
const { User } = require("../models");

module.exports = {
  follow: async (req, res) => {
    try {
      const { id, toFollowId } = req.params;

      const userToFollow = await User.findByPk(toFollowId);
      const user = await User.findByPk(id, {
        include: ["following"],
      });

      if (!user || !userToFollow) {
        return res.status(400).send({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      // Check if user is already following userToFollow
      // Array.some() returns true if at least one element in the array matches the callback
      const isAlreadyFollowing = user.following.some(
        (following) => following.id === userToFollow.id
      );

      if (isAlreadyFollowing) {
        return res.status(400).send({
          message: errorMessage.ALREADY_FOLLOWING_USER,
        });
      }

      await user.addFollower(userToFollow);

      return res.status(200).send({
        message: errorMessage.FOLLOW_IS_SUCCESS,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  unfollow: (req, res) => {},
};
