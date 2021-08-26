const express = require('express');

const router = express.Router();
const { ERROR } = require('../constants');

/**
 * @typedef {Error} Error
 * @property {string} message - Information about the encountered error
 */
router.use((req, res) => {
  res.status(404).json({ message: ERROR.CONTENT_NOT_FOUND });
});

module.exports = router;
