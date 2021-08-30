/* eslint-disable no-console */
/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { upload } = require('../utils');
const { ERROR, EVENT } = require('../constants');
const { event } = require('../utils');

/**
 * @typedef {User} User
 * @property {integer} id - ID
 * @property {string} firstname - Firstname
 * @property {string} lastname - Lastname
 * @property {string} username - Username
 * @property {string} email - Email
 * @property {avatar_url} avatar_url - Avatar URL
 * @property {string} bio - Bio
 * @property {string} password - Password
 * @property {string} city - City
 * @property {string} zipcode - ZipCode
 * @property {string} twitter - Twitter Username
 * @property {string} instagram - Instagram Username
 * @property {string} facebook - Facebook Username
 * @property {string} tiktok - TikTok Username
 * @property {string} astrobin - Astrobin Username
 * @property {string} createdAt - User's account creation date
 * @property {string} updatedAt - User's account last update date
 * @property {integer} role_id - Role ID
 * @property {string} accessToken - Access Token
 * @property {string} refreshToken - Refresh Token
 */

module.exports = {
  getInformations: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        include: [
          'followers',
          'following',
          'organized_explorations',
          'explorations',
          'role',
        ],
      });

      return res.status(200).json(user);
    }
    catch (error) {
      console.error(error);
      res.status(400).json({
        message: ERROR.internal_error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { user } = req;

      /*
      We need to delete username and password from the request,
      if the user want to change it, he must to do a separate request
      */
      delete req.body.id;
      delete req.body.username;
      delete req.body.password;
      delete req.body.avatar_url;
      delete req.body.role_id;
      delete req.body.created_at;
      delete req.body.updated_at;

      const isUpdateHisBio = req.body.bio !== user.bio && !!req.body.bio;

      await user.update({
        ...req.body,
      });

      res.status(200).json({
        user,
      });

      if (isUpdateHisBio) {
        await event.saveUserAction(EVENT.ACTION.UPDATE_BIO, user, {});
      }

      return await event.saveUserAction(EVENT.ACTION.UPDATE_USER, user, {});
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  updateUsername: async (req, res) => {
    try {
      const { password, username } = req.body;

      if (!password || !username) {
        return res.status(400).json({
          message: ERROR.MISSING_CREDENTIALS,
        });
      }

      const user = req.user;
      const usernameAlreadyExist = await User.findOne({
        where: {
          username,
        },
      });

      if (usernameAlreadyExist) {
        return res.status(400).json({
          message: ERROR.USER_ALREADY_EXISTS,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: ERROR.PASSWORD_NOT_MATCH,
        });
      }

      await user.update({
        username,
      });

      res.json({
        user,
      });

      return await event.saveUserAction(EVENT.ACTION.UPDATE_USERNAME, user, {});
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  updatePassword: async (req, res) => {
    try {
      // eslint-disable-next-line camelcase
      const { old_password, new_password } = req.body;
      const user = await User.findByPk(req.user.id);
      const isMatch = await bcrypt.compare(
        old_password,
        user.password,
      );

      // eslint-disable-next-line camelcase
      if (!old_password || !new_password) {
        return res.status(400).json({
          message: ERROR.MISSING_CREDENTIALS,
        });
      }

      if (new_password.length < 8) {
        return res.status(400).json({
          message: ERROR.PASSWORD_TOO_SHORT,
        });
      }

      if (!isMatch) {
        return res.status(401).json({
          message: ERROR.PASSWORD_NOT_MATCH,
        });
      }

      await user.update({
        password: bcrypt.hashSync(new_password, 8),
      });

      res.json({
        message: ERROR.PASSWORD_UPDATED,
      });

      return await event.saveUserAction(EVENT.ACTION.UPDATE_PASSWORD, user, {});
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  updateAvatar: (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const { file } = req;
      const user = await User.findByPk(req.user.id);

      user.update({
        avatar_url: file.location,
      });

      return res.json(user);
    });
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const user = await User.findByPk(id);

      if (!password) {
        return res.status(400).json({
          message: ERROR.MISSING_CREDENTIALS,
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password,
      );

      if (!isMatch) {
        return res.status(401).json({
          message: ERROR.PASSWORD_NOT_MATCH,
        });
      }

      await user.destroy();

      return res.status(200).json({ OK: true });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },
};
