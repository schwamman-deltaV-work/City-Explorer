/* eslint-disable no-console */
'use strict';

const express = require('express');
const app = express();

app.get('/location', (request, response) => {
  try {
    const geoData = require('./data/geo.json');
    const location = new Location(request.query.location, geoData);
    response.send(location);
  } catch(error) {
    response.status(500).send('Dis website is broke. Call someone who cares.');
  }
});

function Location(query, geoData){
  this.search_query = query;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
  
}

app.get('/weather', (request, response) => {
  const weatherData = require('./data/darksky.json');
  response.send(weatherData);
});

app.listen(3000, () => {
  console.log('I know that you came to party baby, baby, baby, baby');
});
