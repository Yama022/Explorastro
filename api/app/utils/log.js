const log = require('log-beautify');

module.exports = {
    success: (message) => {
        log.success(message);
    },

    error: (message) => {
        log.error(message);
    }
}