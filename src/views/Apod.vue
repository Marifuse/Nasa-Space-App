<template>
  <div class="text-center apod__container">
    <apod-search/>
    <section class="text-center apod__section">
      <v-btn color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
    </section>
  </div>
</template>

<script>
import ApodSearch from '../components/ApodSearch'
export default {
  components: {
    ApodSearch
  }
}
</script>

<style>
.apod__container {
  margin: 0;
  background-image: url(https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY) !important;
  background-size: cover !important;
}
.apod__section {
  margin-top: 20em;
  margin-bottom: 15em;
}
</style>