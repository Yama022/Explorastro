const { errorMessage } = require("../constants");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

module.exports = {
  get: async (req, res) => {
    try {
      const timelineContent = [];
      return res.json(timelineContent);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};
