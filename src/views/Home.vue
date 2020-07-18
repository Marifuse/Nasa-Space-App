<template>
  <div class="home home__container">
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
      <header class="text-center header__container">
        <h1>⭐Nasa~Space⭐</h1>
        <h2>¿Quieres conocer el Infinito y más Allá?</h2>
        <h4>Ven y descúbrelo</h4>
      </header>
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
          src: 'https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg',
        },
        {
          src: 'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY',
        },
        {
          src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg',
        },
        {
          src: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/146000/146996/iss063e039892_lrg.jpg',
        }
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
.home__container {
  background-color: gainsboro;
}
.header__container {
  background-color: #FFF;
} 
</style>
