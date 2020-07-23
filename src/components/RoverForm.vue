<template>
  <div class="rover">
    <section class="text-center">
      <v-card class="pa-5 grey lighten-3 mb-15 mx-auto" width="30em">
        <h1 class="text-center mb-5">Busqueda de Imagenes</h1>
          <v-text-field label="Sol" type="number" outlined color="grey lighten-1"/>
          <v-select :items="rovers" label="Rover" color="grey lighten-1"
          ></v-select>
          <v-select :items="cameras" label="Cámaras" color="grey lighten-1"
          ></v-select>
          <div class="text-center pa-3">
            <v-btn color='black' dark>🪐 Buscar 🪐</v-btn>
          </div> 
      </v-card>
      <div class="text-center pa-15">
        <v-btn color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
      </div>  
    </section>
  </div> 
</template>

<script>
// import { mapActions, mapState } from 'vuex'
  export default {
    data: () => ({
      cameras: ['Todas','FHAZ','RHAZ','MAST','CHECKCAM','MAHLI','MARDI','NAVCAM','PANCAM','MINITES'],
      rovers: ['Curiosity', 'Spirit', 'Opportunity'],
    }),
    methods: {
    },
    created() {
    },
  }
</script>

<style>
.rover {
  margin: 0;
  background-image: url(https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg) !important;
  background-size: cover !important;
  padding-top: 3em;
  padding-bottom: 1em;
}
</style>