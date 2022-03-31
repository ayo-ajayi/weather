const request = require("request"),
dotenv = require("dotenv");
dotenv.config();
const BASE_URL="https://api.openweathermap.org/data/2.5/weather";
getWeather = (lat, lon, callback) => {
  request(
    {
      url: `${BASE_URL}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && body.cod === 200) callback(undefined, {temperature: body.main.temp,
    apparentTemperature: body.main.feels_like});
      else callback("Unable to fetch weather");
    }
  );
};

module.exports.getWeather = getWeather;
