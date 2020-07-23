<template>
  <div class="rover">
    <section class="text-center">
      <v-card class="pa-5 grey lighten-3 mb-15 mx-auto" width="30em">
        <h1 class="text-center mb-5">Busqueda de Imagenes</h1>
          <v-text-field :value="roverSearch.sol" @input="updateSol" label="Sol" type="number" outlined color="grey lighten-1"/>
          <v-select :value="roverSearch.rover" @input="updateName" cols='12' md="6" v-model="roverSelected" :items="rovers" label="Rover" color="grey lighten-1"
          ></v-select>
          <v-select :value="roverSearch.camera" @input="updateCamera" cols='12' md="6" v-model="cameraSelected" :items="cameras" label="Cámaras" color="grey lighten-1"
          ></v-select>
          <div class="text-center pa-3">
            <v-btn color='black' dark @click="searchRover">🪐 Buscar 🪐</v-btn>
          </div> 
      </v-card>
      <div class="text-center pa-15">
        <v-btn color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
      </div>  
    </section>
  </div> 
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
    data: () => ({
      cameras: ['Todas','FHAZ','RHAZ','MAST','CHECKCAM','MAHLI','MARDI','NAVCAM','PANCAM','MINITES'],
      rovers: ['Curiosity', 'Spirit', 'Opportunity'],
      cameraSelected: null,
      roverSelected: null,
      rules: [
        v => !!v || '* Este campo es obligatorio',
        v => !isNaN(parseFloat(v)) || '* Debes ingresar un valor numérico'
      ],
      // Alert
      alert: {
        text: "",
        state: false,
      }
    }),
    computed: mapState(['roverSearch']),
    methods: {
      searchRover(){
        if(this.roverSearch.sol!=null && this.roverSearch.rover!=''){
          this.getRover()
        } else{
          this.alert.state = true
          this.alert.text = "Los campo SOL y Rover son obligatorios."
        }
      },
      ...mapActions(['updateSol','updateCamera','updateName','getRover'])
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