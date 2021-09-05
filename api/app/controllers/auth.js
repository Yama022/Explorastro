/* eslint-disable no-console */
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User, Token, PasswordToken } = require('../models');
const { ERROR, EVENT } = require('../constants');
const { jwt, event } = require('../utils');

module.exports = {
  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      
      if (!login || !password) {
        return res.status(400).json({
          message: ERROR.MISSING_CREDENTIALS,
        });
      }

      const user = await User.findOne({
        where: {
          [Op.or]: {
            username: {
              [Op.iLike]: login,
            },
            email: {
              [Op.iLike]: login,
            },
          },
        },
      });

      if (!user) {
        return res.status(404).json({
          message: ERROR.EMAIL_NOT_FOUND,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: ERROR.PASSWORD_NOT_MATCH,
          login,
        });
      }

      const userData = user.toJSON();
      const accessToken = jwt.generateAccessToken(userData);
      const refreshToken = jwt.generateRefreshToken(userData);

      await Token.create({
        user_id: user.id,
        token: refreshToken,
      });

      return res.json({
        ...userData,
        accessToken,
        refreshToken,
      });
    }
    catch (error) {
      console.error(error);
      return res.status(500).send({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  signup: async (req, res) => {
    try {
      const {
        firstname, lastname, username, password, email,
      } = req.body;

      const usernameIsTaken = await User.findOne({
        where: {
          username: {
            [Op.iLike]: username,
          },
        },
      });

      if (usernameIsTaken) {
        return res.status(400).json({
          message: ERROR.USER_ALREADY_EXISTS,
        });
      }

      const emailIsTaken = await User.findOne({
        where: {
          email: {
            [Op.iLike]: email,
          },
        },
      });

      if (emailIsTaken) {
        return res.status(400).json({
          message: ERROR.EMAIL_ALREADY_EXISTS,
        });
      }

      const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password: bcrypt.hashSync(password, 8),
      });

      res.status(200).json(user);

      return await event.saveUserAction(EVENT.ACTION.SIGN_UP, user, {});
    }
    catch (error) {
      console.error(error);
      return res.status(500).send({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  refreshToken: async (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
      return res.status(400).json({ message: ERROR.MISSING_TOKEN });
    }

    const token = await Token.findOne({
      where: {
        token: refreshToken,
      },
    });

    if (!token) {
      return res.status(400).json({ message: ERROR.INVALID_TOKEN });
    }

    token.destroy().then(() => {
      jwt.verifyRefreshToken(refreshToken, async (err, user) => {
        const userData = await User.findByPk(user.id);
        if (err || !userData) return res.status(400).json({ message: ERROR.INVALID_TOKEN });

        console.log(userData)

        const newAccessToken = jwt.generateAccessToken({
          ...userData.toJSON(),
        });
        const newRefreshToken = jwt.generateRefreshToken({
          ...userData.toJSON(),
        });
  
        await Token.create({
          user_id: user.id,
          token: newRefreshToken,
        });
  
        return res.json({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      });
    });
  },

  resetForgottenPassword: async (req, res) => {
    try {
      const { token, password, confirm } = req.body;

      if (password.length < 8) {
        return res.status(400).json({
          message: ERROR.PASSWORD_TOO_SHORT,
        });
      }

      if (password !== confirm) {
        return res.status(400).json({ message: ERROR.PASSWORD_NOT_MATCH });
      }

      const userToken = await PasswordToken.findOne({
        where: {
          token,
        },
      });

      if (!userToken) {
        return res.status(400).json({ message: ERROR.INVALID_TOKEN });
      }

      const user = await User.findByPk(userToken.user_id);

      const hashedPassword = await bcrypt.hashSync(req.body.password, 8);

      await user.update({
        password: hashedPassword,
      });

      await userToken.destroy();

      return res.status(200).json({ message: ERROR.PASSWORD_HAS_BEEN_RESET });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },
};
