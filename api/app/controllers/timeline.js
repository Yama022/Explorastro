const { errorMessage } = require("../constants");
const { User, Exploration, Comment } = require("../models");
const dayjs = require("dayjs");
require("dayjs/locale/fr");

const formatDate = (date, language) => {
  return dayjs(date).locale(language).format("dddd DD MMMM YYYY");
};

module.exports = {
  get: async (req, res) => {
    try {
      return res.json(timelineContent);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};
