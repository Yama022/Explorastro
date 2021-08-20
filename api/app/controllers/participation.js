const { User, Exploration } = require("../models");
const { errorMessage } = require("../constants");

module.exports = {
  getParticipants: async (req, res) => {
    try {
      const { id } = req.params;
      const exploration = await Exploration.findByPk(id, {
        include: ["participants"],
      });

      if (!exploration) {
        res.status(404).send(errorMessage.EXPLORATION_NOT_FOUND);
        return;
      }

      res.json(exploration.participants);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  addParticipant: async (req, res) => {
    try {
      const { id, userId } = req.params;

      if (userId != req.user.id) {
        return res.status(403).json({
          message: errorMessage.UNAUTHORIZED,
        });
      }

      const user = await User.findByPk(userId);
      const exploration = await Exploration.findByPk(id, {
        include: ["participants"],
      });

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      if (exploration.participants.length >= exploration.max_participants) {
        return res.status(400).json({
          message: errorMessage.EXPLORATION_PARTICIPANTS_LIMIT_REACHED,
        });
      }

      const userAlreadyParticipate = exploration.participants.some(
        (participant) => participant.id === user.id
      );

      if (userAlreadyParticipate) {
        return res.status(400).json({
          message: errorMessage.USER_ALREADY_PARTICIPATE,
        });
      }

      await exploration.addParticipant(user);

      res.status(200).json({
        message: errorMessage.SUBSCRIBE_SUCCESS,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  removeParticipant: async (req, res) => {
    try {
      const { id, userId } = req.params;

      if (userId != req.user.id) {
        return res.status(403).json({
          message: errorMessage.UNAUTHORIZED,
        });
      }

      const user = await User.findByPk(userId);
      const exploration = await Exploration.findByPk(id, {
        include: ["participants"],
      });

      console.log(exploration);

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      const userParticipate = exploration.participants.some(
        (participant) => participant.id === user.id
      );

      if (!userParticipate) {
        return res.status(400).json({
          message: errorMessage.USER_NOT_PARTICIPATE,
        });
      }

      await exploration.removeParticipant(user);

      res.status(200).json({
        message: errorMessage.UNSUBCRIBE_SUCCESS,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};
