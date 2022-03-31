const yargs = require("yargs"),
  geocode = require("./geocode/geocode"),
  weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) console.log(errorMessage);
  else {
    console.log(results.address);

    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) console.log(errorMessage);
        else console.log(
            `It's currently ${weatherResults.temperature}. It feeels like ${weatherResults.apparentTemperature}`);
      }
    );
  }
});
