const { User } = require("../models");
const { errorMessage } = require("../constants");

module.exports = {
  getInformations: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      console.log(user);

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

  update: (req, res) => {
    res.json({ message: "update user informations" });
  },

  updatePassword: (req, res) => {
    (req, res) => {
      res.json({ message: "update user password" });
    };
  },

  delete: (req, res) => {
    res.json({ message: "delete user" });
  },
};
