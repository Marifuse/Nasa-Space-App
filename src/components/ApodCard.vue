<template>
  <v-container>
    <h1 class="text-center mt-5" id="title__card">Resultados de la Búsqueda</h1>
    <v-row>
      <v-col v-for="picture in pictures" :key=picture.id cols="12" lg="4" md="6">
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card class="pa-2 mt-5" :elevation="hover ? 16 : 2">
            <v-img class="white--text align-end" height="200px" :src="picture.data.img"></v-img>
          <v-card-text class="text--primary">
            <div><h1>{{ picture.data.title }}</h1></div>
          </v-card-text>
          <v-card-text class="text--primary">
            <div>{{ picture.data.description }}</div>
            <div class="text-center mt-3"><v-btn rounded color="black" dark>Más Info</v-btn></div>
          </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import {mapState, mapActions} from 'vuex'
export default {
//   name:'ImageCard',
//   methods:{
//   ...mapActions(['setPictures'])
//   },
//   computed: {
//   ...mapState(['pictures']),
//   },
//   created() {
//     this.$store.dispatch('setPictures')
//   },
}
</script>