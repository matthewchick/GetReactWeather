
var axios = require('axios');

const weatherAPIKey=process.env.OPEN_WEATHER_MAP_URL || 'b4ad44df233e44f05a4c7f91d7006419';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${weatherAPIKey}`;

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=b4ad44df233e44f05a4c7f91d7006419';
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error (res.data.message);
    });
  }
}
