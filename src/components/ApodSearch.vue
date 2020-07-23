<template>
  <v-container>
    <v-row justify="center">
      <v-date-picker v-model="date" v-bind:max="today" 
      color="grey darken-3" full-width :landscape="$vuetify.breakpoint.smAndUp" 
      class="mt-10 mb-5" @click:date="getInfo"></v-date-picker>
    </v-row>
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
            <iframe v-else width="320" height="240" :src="apod.url"></iframe>
            <h2 class="text-center">{{ apod.title }}</h2>
            <v-card-subtitle class="pb-5">{{ apod.date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ apod.explanation }}</div>
            </v-card-text>
          </v-card>
        </v-hover>  
      </v-col>
    </section>
    <!-- <v-btn color="black" dark>✨ Buscar ✨</v-btn> -->
  </v-container>
</template>

<script>
// import VIframe from '../index.vue'
import { mapActions, mapState } from "vuex";
export default {
  name:'ApodSearch',
  // components: { VIframe },
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      date: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {
    ...mapState(["apod"])
  },
  methods: {
    ...mapActions(["getApod"]),
    getInfo() {
      this.getApod(this.date);
    }
  }
};
</script>
