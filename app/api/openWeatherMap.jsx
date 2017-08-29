
var axios = require('axios');

const weatherAPIKey=process.env.OPEN_WEATHER_MAP_URL || '86ab0916ec5843a32f0be2ee01f41b6c';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${weatherAPIKey}`;

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=87ab0916ec5843a32f0be2ee01f41b6c';
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        if (res.data.name.toLowerCase() === location.toLowerCase()) {
          return res.data.main.temp;
        } else {
          throw new Error('City not found');
        }
      }
    }, function (err) {
      throw new Error (err.response.data.message);
    });
  }
}
