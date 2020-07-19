<template>
  <div class="rover">
    <section class="text-center">
      <v-card class="pa-5 grey lighten-3 mb-15 mx-auto" width="30em">
        <h1 class="text-center mb-5">Busqueda de Imagenes</h1>
          <v-text-field label="Sol" type="text" outlined color="grey lighten-1"/>
          <v-row align="center">
            <v-subheader>Rover</v-subheader>
              <v-select
                v-model="select"
                :hint="`${select.item}`"
                :items="items"
                item-text="item"
                label="Select"
                persistent-hint
                return-object
                single-line
                color="dark"
              ></v-select>
          </v-row>
          <div class="text-center pa-3">
            <v-btn color='black' dark @click="search">🪐 Buscar 🪐</v-btn>
          </div> 
      </v-card>
      <div class="text-center pa-15">
        <v-btn color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
      </div>  
    </section>
  </div> 
</template>

<script>
  export default {
    data () {
      return {
        select: { item: 'Options'},
        items: [
          { item: 'Curiosity'},
          { item: 'Opportunity'},
          { item: 'Spirit'},
        ],
      }
    },
    methods: {
    search() {
      let date = this.sol.date
      fetch(`${date}`)
      .then(response => response.json())
      .then(response => this.sol = response)
      }
    },
    created() {
      this.search()
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