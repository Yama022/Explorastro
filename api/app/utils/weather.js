const fetch = require('node-fetch');

const API_KEY = process.env.WEATHER_API_KEY;

module.exports = {
  getWeather: async (lgt, lat) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lgt}&cnt=1&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  },
};
