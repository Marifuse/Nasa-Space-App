<template>
  <div class="text-center apod__container">
    <v-btn class="mx-2" color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.apod__container {
  margin: 0;
  background-image: url(https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY) !important;
  background-size: cover !important;
  padding: 17.5em;
}
</style>