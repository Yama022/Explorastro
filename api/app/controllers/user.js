module.exports = {
  getInformations: (req, res) => {
    res.json({ message: "user" });
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
