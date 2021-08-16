const { User } = require("../models");
const { errorMessage } = require("../constants");
const bcrypt = require("bcrypt");

module.exports = {
  getInformations: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        include: ['followers', 'following', 'organized_explorations', 'explorations', 'role']
      });

      if (!user) {
        return res.status(404).json({ message: errorMessage.USER_NOT_FOUND });
      }

      return res.status(200).send(user);
    } catch (error) {
      res.status(400).json({
        message: errorMessage.internal_error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const userToUpdate = await User.findByPk(id);

      if (!userToUpdate) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      // We need to verify that the user is who they say they are
      if(userToUpdate.id !== req.user.id) {
        return res.status(403).json({
          message: errorMessage.UNAUTHORIZED,
        });
      }

      // We need to delete username and password from the request, if the user want to change it, he must to do a separate request
      delete req.body.username;
      delete req.body.password;

      await userToUpdate.update({
        ...req.body,
      });

      return res.status(200).json({
        userToUpdate
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
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

      const userUpdatePassword = await User.findByPk(req.user.id);

      if (!userUpdatePassword) {
          return res.status(404).json({
              message: errorMessage.USER_NOT_FOUND,
          });
      }

      const isMatch = await bcrypt.compare(
        old_password,
        userUpdatePassword.password
      );

      if (!isMatch) {
          return res.status(401).json({
              message: errorMessage.PASSWORD_NOT_MATCH,
          });
      }

      const newPasswordHash = bcrypt.hashSync(new_password, 8);

      userUpdatePassword.password = newPasswordHash;

      await userUpdatePassword.save();

      return res.json({
          message: "Password updated. Please login again",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
          message: "Internal server error. Please retry later",
      });
  }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const userToDelete = await User.findByPk(id);

      if (!userToDelete) {
        return res.status(404).json({
          message: errorMessage.USER_NOT_FOUND,
        });
      }

      // We need to verify that the user is who they say they are
      if(userToDelete.id !== req.user.id) {
        return res.status(403).json({
          message: errorMessage.UNAUTHORIZED,
        });
      }

      await userToDelete.destroy();

      return res.status(200).json({OK: true});
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};
