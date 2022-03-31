const request = require("request"),
  BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

let geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request(
      {
        url: `${BASE_URL}?key=${API_KEY}&address=${encodedAddress}`,
        json: true,
      },
      //
      (error, response, body) => {
        if (error) reject("Unable to connect to Google servers");
        else if (body.status === "ZERO_RESULTS")
          reject("Unable to find that address");
        else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng,
          });
        }
      }
    );
  });
};
geocodeAddress('0000000000000000000').then(
  (location) => {
    console.log(JSON.stringify(location, null, 2));
  }).catch(
  (errorMessage) => {
    console.log(errorMessage);
  }
);

module.exports.geocodeAddress = geocodeAddress;
