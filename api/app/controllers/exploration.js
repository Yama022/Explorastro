/* eslint-disable no-console */
const { Op } = require('sequelize');
const { Exploration } = require('../models');
const { ERROR, EVENT } = require('../constants');
const { owp } = require('../utils');
const { event, upload } = require('../utils');

/**
 * @typedef {CRS} CRS
 * @property {string} type
 * @property {Object<string>} properties
 */

/**
 * @typedef {Location} Location
 * @property {integer} lng - Longitude
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
          is_published: true,
        },
        include: ['author'],
        order: [['date', 'ASC']],
      });

      res.status(200).json(explorations);
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        error: ERROR.INTERNAL_SERVER_ERROR,
      });
    }
  },

  getInformations: async (req, res) => {
    const { id } = req.params;
    const exploration = await Exploration.findByPk(id, {
      include: { all: true },
    });

    // Save exploration data in object for attach weather data if needed
    const explorationData = exploration.toJSON();

    // Add weather informations
    const lgt = exploration?.geog?.coordinates[0];
    const lat = exploration?.geog?.coordinates[1];

    if (lgt && lat) {
      const weather = await owp.getWeather(lgt, lat);
      explorationData.weather = weather;
    }

    res.json(explorationData);
  },

  // eslint-disable-next-line consistent-return
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const { user } = req;

      if (!name) {
        return res.status(400).json({
          message: ERROR.MISSING_EXPLORATION_NAME,
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
          message: ERROR.EXPLORATION_LIMIT_REACHED,
        });
      }

      const exploration = new Exploration({
        name,
        author_id: req.user.id,
        ...req.body,
      });

      await exploration.save();

      res.json(exploration);

      return await event.saveUserAction(EVENT.ACTION.CREATE_EXPLORATION, user, {
        exploration,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  // eslint-disable-next-line consistent-return
  update: async (req, res) => {
    try {
      const lgt = req.body.location?.lng;
      const lat = req.body.location?.lat;
      const { user } = req;
      const { exploration } = req;

      // We need to remove the information from the body that could corrupt the database record
      delete req.body.id;
      delete req.body.author_id;
      delete req.body.image_url;
      delete req.body.created_at;
      delete req.body.updated_at;

      const isWantToPublish = req.body.is_published;
      const isPublished = exploration.is_published;

      await exploration.update({
        ...req.body,
        geog: {
          type: 'Point',
          coordinates: [lgt, lat],
        },
      });

      res.status(200).json({
        exploration,
      });

      // If the exploration is to be published, we need to create a new event
      if (isWantToPublish && !isPublished) {
        await event.saveUserAction(EVENT.ACTION.PUBLISH_EXPLORATION, user, {
          exploration,
        });
      }

      return await event.saveUserAction(EVENT.ACTION.EDIT_EXPLORATION, user, {
        exploration,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },

  updateIllustration: (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const { file } = req;

      await req.exploration.update({
        image_url: file.location,
      });

      return res.json(req.exploration);
    });
  },

  // eslint-disable-next-line consistent-return
  delete: async (req, res) => {
    try {
      const { user } = req;

      const { exploration } = req;

      await exploration.destroy();

      res.status(200).json({ OK: true });

      return await event.saveUserAction(EVENT.ACTION.DELETE_EXPLORATION, user, {
        exploration,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: ERROR.INTERNAL_ERROR,
      });
    }
  },
};
