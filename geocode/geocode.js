const request = require("request"),
dotenv = require("dotenv");
dotenv.config();

const BASE_URL="https://api.openweathermap.org/data/2.5/weather";
geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `${BASE_URL}?key=${API_KEY}&address=${encodedAddress}`,
      json: true,
    },
    //
    (error, response, body) => {
      if (error) callback("Unable to connect to Google servers");
      else if (body.status === "ZERO_RESULTS")
        callback("Unable to find that address");
      else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
