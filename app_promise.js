const yargs = require("yargs"),
  axios = require("axios"),
dotenv = require("dotenv");
dotenv.config();

const GEO_BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json",
WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

argv = yargs
  .options({
    a: {
      alias: "address",
      demand: true,
      describe: "Address to fetch weather for",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `${GEO_BASE_URL}?key=${GEO_API_KEY}&address=${encodedAddress}`;

axios
  .get(geocodeURL)
  .then((response) => {
    if (response.data.status === "ZERO_RESULTS")
      throw new Error("Unable to find that address");
    let lat = response.data.results[0].geometry.location.lat,
      lon = response.data.results[0].geometry.location.lng,
      weatherURL = `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  })
  .then((res) => {
    let temp = res.data.main.temp - 273.0;
    let appTemp = res.data.main.feels_like - 273.0;
    console.log(`temperature: ${temp}`);
    console.log(`apparentTemperature: ${appTemp}`);
  })
  .catch((e) => {
    if (e.code === "ENOTFOUND") console.log("Unable to connect to API servers");
    else console.log(e.message);
  });

//throwing an error causes the code after it to not run and moves directly into the error handler.
//i.e I throw the error in the .then() method and the error handler executes  it in the .catch() block

//continue the project by setting a default location such that the location does not need to be indicated for it's temp to be displayed. However, the app should also work when locations are provided.
