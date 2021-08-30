const express = require('express');

const router = express.Router();
const { mainController, timelineController } = require('../controllers');
const { tokenMiddleware } = require('../middlewares');

/**
 * Return API Informations
 * @route GET /api/v1
 * @group Informations - Operations about API
 * @returns {API-Infos.model} 200 - An object containing API informations
 */
router.get('/', mainController.informationsAPI);

/**
 * Returns the timeline of the connected user
 * @route GET /api/v1/timeline
 * @group Timeline - Operations about timeline
 * @returns {API-Infos.model} 200 - An object containing API informations
 */
router.get(
  '/timeline',
  tokenMiddleware.authenticateToken,
  timelineController.get,
);

module.exports = router;
