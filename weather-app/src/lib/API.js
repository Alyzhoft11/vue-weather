const proxy = 'http://cors-anywhere.herokuapp.com/';
const API_KEY = 'f35641ff84cb8fa6290d3292d06509d8';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
  .then(response => response.json())
}

function getForecast(lat, log){
  return fetch(`${WEATHER_API_URL}${lat},${log}`)
    .then(response => response.json())
}

function getAddress(lat, log){
  return fetch((`${ADDRESS_API_URL}&lat=${lat}&lon=${log}`))
    .then(response => response.json())
} 

export default {
  getForecast,
  getCoordinates,
  getAddress
};