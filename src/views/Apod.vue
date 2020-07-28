<template>
  <div class="text-center apod__container">
    <h1 class="mt-10">Apod</h1>
    <h3>✨Ven y observa la Foto o Vídeo del Día✨</h3>
    <apod-search/>
    <section class="text-center apod__section">
      <v-btn color="dark" dark to="/home">🚀 Volver a Home 🚀</v-btn>
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
  color: #FFF;
}
.apod__section {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>