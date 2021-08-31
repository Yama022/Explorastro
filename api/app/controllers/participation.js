/* eslint-disable no-console */
const { User, Exploration } = require('../models');
const { ERROR, EVENT } = require('../constants');
const { event } = require('../utils');

module.exports = {
  getAll: async (req, res) => {
    try {
      const { id } = req.params;
      const exploration = await Exploration.findByPk(id, {
        include: ['participants'],
      });

      if (!exploration) {
        return res.status(404).json({
          message: ERROR.EXPLORATION_NOT_FOUND,
        });
      }

      res.json(exploration.participants);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  add: async (req, res) => {
    try {
      const { id, userId } = req.params;

      if (+userId !== req.user.id) {
        return res.status(403).json({
          message: ERROR.UNAUTHORIZED,
        });
      }

      const user = await User.findByPk(userId);
      const exploration = await Exploration.findByPk(id, {
        include: ['participants'],
      });

      if (exploration.participants.length >= exploration.max_participants) {
        return res.status(400).json({
          message: ERROR.EXPLORATION_PARTICIPANTS_LIMIT_REACHED,
        });
      }

      const userAlreadyParticipate = exploration.participants.some(
        (participant) => participant.id === user.id,
      );

      if (userAlreadyParticipate) {
        return res.status(400).json({
          message: ERROR.USER_ALREADY_PARTICIPATE,
        });
      }

      await exploration.addParticipant(user);

      res.status(200).json({
        message: ERROR.SUBSCRIBE_SUCCESS,
      });

      return await event.saveUserAction(EVENT.ACTION.PARTICIPATION_ADD, user, {
        exploration,
      });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id, userId } = req.params;

      if (userId !== req.user.id) {
        return res.status(403).json({
          message: ERROR.UNAUTHORIZED,
        });
      }

      const user = await User.findByPk(userId);
      const exploration = await Exploration.findByPk(id, {
        include: ['participants'],
      });

      const userParticipate = exploration.participants.some(
        (participant) => participant.id === user.id,
      );

      if (!userParticipate) {
        return res.status(400).json({
          message: ERROR.USER_NOT_PARTICIPATE,
        });
      }

      await exploration.removeParticipant(user);

      res.status(200).json({
        message: ERROR.UNSUBCRIBE_SUCCESS,
      });

      return await event.saveUserAction(EVENT.ACTION.PARTICIPATION_REMOVED, user, {
        exploration,
      });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },
};
