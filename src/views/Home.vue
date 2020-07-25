<template>
  <div class="home home__container">
    <!-- Sección Carousel -->
    <v-carousel
      continuous
      cycle
      class="pt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>
      <!-- Cabecera -->
      <header class="text-center header__container">
        <h1>⭐Nasa~Space⭐</h1>
        <h2>¿Quieres conocer el Infinito y más Allá?</h2>
        <h4>Ven y descúbrelo</h4>
      </header>
      <!-- Sección botones -->
      <section class="btn__container">
        <div class="text-center btn__sections">
          <v-btn class="mr-3" rounded color="black" dark to="/apod">🌟 Ir a Apod 🌟</v-btn>
          <v-btn class="mt-5" rounded color="black" dark to="/rover">🌟 Ir a Rover 🌟</v-btn>
        </div>
      </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
      items: [
        {
          src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
        },
        {
          src: 'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY',
        },
        {
          src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg',
        },
        {
          src: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146996/iss063e039892_lrg.jpg',
        },
        {
          src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/s69-40758.jpg',
        },
        {
          src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/3_iss057e055409.jpg',
        },
        {
          src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss058e013234.jpg',
        },
      ],
    }
  },
  name: 'Home',
  components: {
    Footer
  },
}
</script>

<style lang="scss">
// Sección principal
.home__container {
  background-color: gainsboro;
}
// Sección cabecera
.header__container {
  background-color: #FFF;
} 
// Sección Botones
.btn__container {
  margin: 0;
  background-image: url(https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/iss057e111453_lrg.jpg) !important;
  background-size: cover !important;
}
.btn__sections {
  padding-top: 15em;
  padding-bottom: 15em;
}
</style>
