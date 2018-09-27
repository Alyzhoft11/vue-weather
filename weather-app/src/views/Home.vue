<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="forecast">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">{{address}}</div>
          <div class="card-body">
            <h4 class="card-title">{{forecast.currently.summary}}</h4>
            <div class="card-text icon-temp">
              <span class="emoji">{{icons[forecast.currently.icon]}}</span>
              {{forecast.currently.temperature}} &#8457;
            </div> 
            <div class="card-text">
              {{forecast.currently.precipProbability}} % of Precipitation
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || '',
      forecast: null,
      address: localStorage.address || '',
      icons: {
        'clear-day': '🌞',
        'clear-night': '🌃',
        rain: '☔',
        snow: '🌨',
        sleet: '❄',
        wind: '💨',
        fog: '🌁',
        cloudy: '☁',
        'partly-cloudy-day': '🌤',
        'partly-cloudy-night': '🌌'
      }
    };
  },
  mounted() {
    this.loadWeather(localStorage.lat || '37.8267', localStorage.log || '-122.4233');
  },
  methods: {
    loadWeather(lat, log) {
      localStorage.lat = lat;
      localStorage.log = log;
      API.getAddress(lat, log)
        .then(result => {
            this.address = [result.name, result.street].join(' ');
            localStorage.address = this.address;
        })
      API.getForecast(lat, log)
        .then(result => {
          this.forecast = result;
        });
    },
    updateLocation() {
      localStorage.location = this.location
      API.getCoordinates(this.location)
        .then(result => {
          this.loadWeather(result.latitude, result.longitude)      
        })
    }
  },
};
</script>

<style>
  body {
    font-size: 2em;
  }

  .icon-temp {
    font-size: 2em;
  }

  .emoji {
    font-size: 2em;
  }
</style>

