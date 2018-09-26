const proxy = 'http://cors-anywhere.herokuapp.com/';
const API_KEY = 'f35641ff84cb8fa6290d3292d06509d8';
const location = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getForecast(){
  return fetch(API_URL)
    .then(response => response.json())
}

export default {
  getForecast
};