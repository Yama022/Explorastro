const { User, Token } = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { errorMessage } = require("../constants");
const { jwt } = require("../utils");

module.exports = {
  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      if (!login || !password) {
        return res.status(400).json({
          message: errorMessage.MISSING_CREDENTIALS,
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
          message: errorMessage.EMAIL_NOT_FOUND,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: errorMessage.PASSWORD_NOT_MATCH,
          login,
        });
      }

      const userData = user.toJSON();
      const accessToken = jwt.generateAccessToken(userData);
      const refreshToken = jwt.generateRefreshToken(userData);

      const tokenToSave = new Token({
        user_id: user.id,
        token: refreshToken,
      });

      await tokenToSave.save();

      return res.json({
        ...userData,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  signup: async (req, res) => {
    try {
      const { firstname, lastname, username, password, email } = req.body;

      const usernameIsTaken = await User.findOne({
        where: {
          username: {
            [Op.iLike]: username,
          },
        },
      });

      if (usernameIsTaken) {
        return res.status(400).json({
          message: errorMessage.USER_ALREADY_EXISTS,
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
          message: errorMessage.EMAIL_ALREADY_EXISTS,
        });
      }

      const user = new User({
        firstname,
        lastname,
        username,
        email,
        password: bcrypt.hashSync(password, 8),
      });

      await user.save();

      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  refreshToken: (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
      return res.status(400).json({ message: errorMessage.MISSING_TOKEN });
    }

    const token = Token.findOne({
      where: {
        token: refreshToken,
      },
    });

    if (!token) {
      res.status(400).json({ message: errorMessage.INVALID_TOKEN });
    }

    jwt.verifyRefreshToken(refreshToken, (err, user) => {
      if (err) res.status(400).json({ message: errorMessage.INVALID_TOKEN });
      const accessToken = jwt.generateAccessToken({
        name: user.name,
      });
      res.json({
        accessToken,
      });
    });
  },
};
