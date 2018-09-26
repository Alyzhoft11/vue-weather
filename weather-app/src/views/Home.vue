<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2 text-center">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">Current Weather</div>
          <div class="card-body">
            <h4 class="card-title">{{forecast.currently.summary}}</h4>
            <div class="card-text">
              {{forecast.currently.icon}}
              {{forecast.currently.temperature}} &#8457;
            </div> 
            <div class="card-text">
              {{forecast.currently.precipProbability}} %
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{forecast}}</pre>
  </div>
</template>

<script>
  import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      forecast: {}
    };
  },
  mounted() {
    API.getForecast()
      .then(result => {
        console.log(result);
        this.forecast = result
      });
  },
};
</script>
