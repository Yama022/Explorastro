const jwt = require('./token');
const owp = require('./weather');
const upload = require('./multer');
const event = require('./event');
const date = require('./date');
const timeline = require('./timeline');

module.exports = {
  jwt,
  owp,
  upload,
  event,
  date,
  timeline,
};
