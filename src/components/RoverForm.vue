<template>
  <div class="rover">
    <main class="rover__container mt-10 grey lighten-2">
      <v-container>
        <h1>Busqueda de Imagenes</h1>
        <v-text-field label='Sol' 
          color="dark"
          />
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
        <div class="mt-10 text-center">
          <v-btn color='black' dark @click="search">🪐 Buscar 🪐</v-btn>
        </div>
      </v-container>
    </main>
    <div class="text-center pa-15">
      <v-btn class="mx-2" color="black" dark to="/home">🚀 Volver a Home 🚀</v-btn>
    </div>
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
  padding: 1em;
}
.rover__container {
  width: 30em;
  text-align: center;
  margin: auto;
  padding: 3em;
  border-radius: 2em;
}
</style>