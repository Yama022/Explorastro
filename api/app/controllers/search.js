const { User, Exploration } = require("../models");
const { sequelize } = require("../database");
const { Op } = require("sequelize");
const { ERROR } = require("../constants");

module.exports = {
  explorations: async (req, res) => {
    try {
      const { search, radius, lng, lat } = req.query;

      const franceCoord = {
        lat: 46.227638,
        lng: 2.213749,
      };

      const earthRadius = 6371;
      const earthRadiusInKm = earthRadius * 1000;

      const results = await sequelize.query(
        `
      SELECT *
      FROM exploration
      WHERE is_published=true
      AND date > NOW()
      AND ST_DWithin(geog, ST_MakePoint($1,$2)::geography, $3)
      AND NAME ILIKE '%${search ?? ""}%';
    `,
        {
          bind: [
            lat ?? franceCoord.lat,
            lng ?? franceCoord.lng,
            radius ?? earthRadiusInKm,
          ],
        }
      );

        res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: ERROR.INTERNAL_SERVER_ERROR,
      });
    }
  },
  searchUserByName: async (req, res) => {
    const { name } = req.query;

    const usersFound = await User.findAll({
      where: {
        [Op.or]: [
          {
            firstname: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            lastname: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            username: {
              [Op.iLike]: `%${name}%`,
            },
          },
        ],
      },
      limit: 10,
    });

    res.json(usersFound);
  },
};
