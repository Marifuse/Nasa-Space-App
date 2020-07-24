<template>
  <div class="rover">
    <!-- Formulario -->
    <section class="text-center">
      <v-card class="pa-5 grey lighten-3 mb-15 mx-auto" width="30em">
        <h1 class="text-center mb-5">Busqueda de Imagenes</h1>
          <v-text-field label="Sol" v-model="sol" type="number" outlined color="grey lighten-1"/>
          <v-select :items="rovers" v-model="rover" label="Rover" color="grey lighten-1"
          ></v-select>
          <div class="text-center pa-3">
            <v-btn color='black' dark @click="getRoverInfo">🪐 Buscar 🪐</v-btn>
          </div> 
      </v-card> 
    </section>
    <!-- Sección de las Camaras -->
    <section>
      <v-card class="mx-auto grey lighten-3" width="30em">
        <div class="text-center mb-10" v-if="cameras">
          <h2>Cantidad de fotos por Camaras</h2>
          <div v-for="(count, camera) in camerasCount" :key="camera">
            {{ camera }} : {{ count }}
          </div>
        </div>
      </v-card>
    </section>
  </div> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data: () => ({
      sol: '1000',
      rover: 'Curiosity',
      rovers: ['Curiosity', 'Spirit', 'Opportunity'],
    }),
     computed: {
      ...mapGetters(["cameras"]),
      camerasCount() {
        let summary = {};
        this.cameras.map(camera => {
          summary[camera] = (summary[camera] || 0) + 1;
        });
        return summary;
      }
    },
    methods: {
      ...mapActions(["getRoverData"]),
      getRoverInfo() {
        const payload = { sol: this.sol, rover: this.rover };
        this.getRoverData(payload);
      }
    },
  }
</script>

<style>
.rover {
  margin: 0;
  background-image: url(https://apod.nasa.gov/apod/image/2007/SGUNeuschwansteinNeowiseIMG2532-1920.jpg) !important;
  background-size: cover !important;
  padding-top: 3em;
  padding-bottom: 1em;
}
</style>