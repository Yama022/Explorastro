const { Exploration } = require("../models");
const { errorMessage } = require("../constants");
const { Op } = require("sequelize");

/**
 * @typedef {CRS} CRS
 * @property {string} type
 * @property {Object<string>} properties
 */

/**
 * @typedef {Location} Location
 * @property {integer} lgt - Longitude
 * @property {integer} lat - Latitude
 */

/**
 * @typedef {GeoCoords} GeoCoords
 * @property {CRS.model} crs
 * @property {string} type
 * @property {Array.<integer, integer>} coordinates
 */

/**
 * @typedef {Comment} Comment
 * @property {integer} id - ID
 * @property {string} content - Content of the comment
 * @property {string} author_id - ID of the author 
 * @property {string} createdAt - Date of creation
 * @property {string} updatedAt - Date of last update
 */

/**
 * @typedef {Exploration} Exploration
 * @property {integer} id - ID
 * @property {string} name - Name
 * @property {string} description - Description
 * @property {GeoCoords.model} geog - Geographical coordinates
 * @property {string} date - Date
 * @property {integer} max_participants - Maximum number of participants
 * @property {boolean} is_published - Publish status (true - published, false - not published)
 * @property {string} image_url - Image URL
 * @property {integer} author_id - Author ID
 * @property {User.model} author - Author informations
 * @property {Array.<User>}participants - Participants
 * @property {Array.<Comment>} comments - Comments
 * @property {string} createdAt - Exploration's creation date
 * @property {string} updatedAt - Exploration's last update date
 */

module.exports = {

  getAll: async (req, res) => {
    try {
      const explorations = await Exploration.findAll({
        where: {
          is_published: true
        },
        include: ['author'],
        order: [['date', 'ASC']]
      });
  
      res.status(200).json(explorations);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: errorMessage.INTERNAL_SERVER_ERROR,
      });
    }
  },

  getInformations: async (req, res) => {
    const { id } = req.params;
    const exploration = await Exploration.findByPk(id, {
      include: { all: true },
    });

    if (!exploration) {
      res.status(404).json({
        message: errorMessage.EXPLORATION_NOT_FOUND,
      });
    }

    res.json(exploration);
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          message: errorMessage.MISSING_EXPLORATION_NAME,
        });
      }

      const numberOfExplorations = await Exploration.count({
        where: {
          [Op.and]: [
            { author_id: req.user.id },
            {
              date: {
                [Op.or]: {
                  [Op.gt]: new Date(),
                  [Op.eq]: null,
                },
              },
            },
          ],
        },
      });

      if (numberOfExplorations >= 10) {
        return res.status(400).json({
          message: errorMessage.EXPLORATION_LIMIT_REACHED,
        });
      }

      const exploration = new Exploration({
        name,
        author_id: req.user.id,
        ...req.body,
      });

      await exploration.save();

      res.json(exploration);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const lgt = req.body.location?.lgt;
      const lat = req.body.location?.lat;

      const exploration = await Exploration.findByPk(id);

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      // We need to remove the information from the body that could corrupt the database record
      delete req.body.id;
      delete req.body.author_id;
      delete req.body.created_at;
      delete req.body.updated_at;

      await exploration.update({
        ...req.body,
        geog: {
          type: "Point",
          coordinates: [lgt, lat],
        },
      });

      res.status(200).json({
        exploration,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const exploration = await Exploration.findByPk(id);

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      await exploration.destroy();

      res.status(200).json({ OK: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  addParticipant: async (req, res) => {
  },

  removeParticipant: async (req, res) => {
  }
};
