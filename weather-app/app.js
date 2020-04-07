const { getCords } = require('./utils/geocode');
const { forecast } = require('./utils/forcast');

const address = process.argv[2];

getCords(address, (err, res) => {
  if (!address) {
    console.log('No address entered, please retry with an address')
  } else if (err) {
    console.log(err);
  } else {
    forecast(res.longitude, res.latitude, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(
          `The current forecast for ${res.name} is. ${
            response.dailySummary
          } Currently it is ${response.temperature} degrees out, and there is ${
            response.precipProbability
          } chance of rain.`
        );
      }
    });
  }
});
