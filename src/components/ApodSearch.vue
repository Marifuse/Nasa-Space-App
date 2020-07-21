<template>
  <v-container>
    <v-row justify="center">
      <v-date-picker v-model="picker" color="grey darken-3" full-width :landscape="$vuetify.breakpoint.smAndUp" 
      class="mt-10 mb-5"></v-date-picker>
    </v-row>
    <v-btn color="black" dark>✨ Buscar ✨</v-btn>
  </v-container>
</template>

<script>
export default {
  name:'ApodSearch',
  data() { 
    return { 
      date: '', 
      title: '', 
      explanation: '', 
      url: '',
      picker: new Date().toISOString().substr(0, 10), 
    } 
  },
  methods:{
    apod() {
      // console.log('holis es una prueba')
      fetch(`https://api.nasa.gov/planetary/apod?api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL`)
      .then(response => response.json())
      .then(data => console.log(data))
    }
  },
  computed: {
  
  },
  created() {
    this.apod()
  },
}
</script>