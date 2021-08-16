const express = require('express');
const router = express.Router();
const { errorMessage } = require('../constants');

router.use((req, res) => {
    res.status(404).json({message: errorMessage.CONTENT_NOT_FOUND})
})

module.exports = router;