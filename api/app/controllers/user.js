const { User } = require("../models");
const bcrypt = require("bcrypt");
const { errorMessage } = require("../constants");
const {upload} = require("../utils");

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
          "followers",
          "following",
          "organized_explorations",
          "explorations",
          "role",
        ],
      });

      if (!user) {
        return res.status(404).json({ message: errorMessage.USER_NOT_FOUND });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: errorMessage.internal_error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      // We need to delete username and password from the request, if the user want to change it, he must to do a separate request
      delete req.body.id;
      delete req.body.username;
      delete req.body.password;
      delete req.body.role_id;
      delete req.body.created_at;
      delete req.body.updated_at;

      await user.update({
        ...req.body,
      });

      return res.status(200).json({
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  updateUsername: async (req, res) => {
    try {
      const { password, username } = req.body;

      if (!password || !username) {
        return res.status(400).json({
          message: errorMessage.MISSING_CREDENTIALS,
        });
      }

      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: errorMessage.PASSWORD_NOT_MATCH,
        });
      }

      await user.update({
        username,
      });

      return res.json({
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { old_password, new_password } = req.body;

      if (!old_password || !new_password) {
        return res.status(400).json({
          message: errorMessage.MISSING_CREDENTIALS,
        });
      }

      if (new_password.length < 8) {
        return res.status(400).json({
          message: errorMessage.PASSWORD_TOO_SHORT,
        });
      }

      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      if (user.id !== req.user.id) {
        return res.status(403).json({
          message: errorMessage.UNAUTHORIZED,
        });
      }

      const isMatch = await bcrypt.compare(
        old_password,
        user.password
      );

      if (!isMatch) {
        return res.status(401).json({
          message: errorMessage.PASSWORD_NOT_MATCH,
        });
      }

      await user.update({
        password: bcrypt.hashSync(new_password, 8)
      });

      return res.json({
        message: errorMessage.PASSWORD_UPDATED,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  updateAvatar: async (req, res) => {
    upload(req, req, (err, file) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      
      console.log(req.file)
    });
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const password = req.body.password;

      if (!password) {
        return res.status(400).json({
          message: errorMessage.MISSING_CREDENTIALS,
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(401).json({
          message: errorMessage.PASSWORD_NOT_MATCH,
        });
      }

      await user.destroy();

      return res.status(200).json({ OK: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};