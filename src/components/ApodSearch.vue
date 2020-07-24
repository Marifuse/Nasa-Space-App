<template>
  <v-container>
    <!-- Calendario -->
    <v-row justify="center">
      <v-date-picker v-model="date" v-bind:max="today" 
      color="grey darken-3" full-width :landscape="$vuetify.breakpoint.smAndUp" 
      class="mt-10 mb-5" @click:date="getInfo"></v-date-picker>
    </v-row>
    <!-- Sección carta con el resultado del calendario -->
    <section>
      <v-col cols="12" xs="12" sm="12" class="mx-auto">
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card class="mx-auto" max-width="400" :elevation="hover ? 16 : 2">
            <v-img
              v-if="apod.media_type == 'image'"
              class="white--text align-end"
              height="200px"
              :src="apod.url"
            >
            </v-img>
            <iframe class="responsive-iframe" v-else width="350" height="250" :src="apod.url"></iframe>
            <h2 class="text-center">{{ apod.title }}</h2>
            <v-card-subtitle class="pb-5">{{ apod.date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ apod.explanation }}</div>
            </v-card-text>
          </v-card>
        </v-hover>  
      </v-col>
    </section>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name:'ApodSearch',
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      date: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {
    ...mapState(['apod'])
  },
  methods: {
    ...mapActions(['getApod']),
    getInfo() {
      this.getApod(this.date);
    }
  }
};
</script>

<style>
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
