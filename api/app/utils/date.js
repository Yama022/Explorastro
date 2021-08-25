const dayjs = require('dayjs');
require('dayjs/locale/fr');

module.exports = {
    format: (date, language) => {
        if (language === 'fr') {
            return dayjs(date).locale(language).format('dddd DD MMMM YYYY à HH:mm');
        } else {
            return dayjs(date).locale(language).format("dddd DD MMMM YYYY, hh:mm A");
        }
      },

    getDate: () => {
        return Date.now();
    }
}