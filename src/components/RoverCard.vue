<template>
  <div class="grey lighten-3">
    <!-- Sección de las cards -->
    <v-container>
      <h1 class="text-center mt-5 mb-5" id="title__card">Galería</h1>
      <v-row>
        <v-col v-for="photo in roverData.photos" :key="photo.id" cols="12" lg="4" md="6">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
          >
            <v-card
              class="mx-auto text-center"
              max-width="400"
              :elevation="hover ? 16 : 2"
            >
              <v-img class="white--text align-end" height="200px" :src="photo.img_src">
              </v-img>
              <h2>{{ photo.camera.full_name }}</h2>
              <v-card-subtitle class="pb-0">{{ photo.earth_date }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{ photo.id }}</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <section>
        <div class="text-center pa-15">
          <v-btn color="black" dark to="/home">🚀 Home 🚀</v-btn>
        </div> 
      </section>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
     computed: {
      ...mapState(['roverData']),
    },
    methods: {
      ...mapActions(['getRoverData']),
    },
  }
</script>

<style>
  
</style>