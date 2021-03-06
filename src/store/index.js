import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL"

const ROVER_ENDPOINT = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const KEY = 'aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL'

export default new Vuex.Store({
  state: {
    currentUser: null,
    // Apod
    apod: {},
    roverData: {
      photos: []
    },
    loading: false,
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    // Mutaciones overlay
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    // GET APOD
    GET_APOD(state, apod) { state.apod = apod },
    // GET ROVER
    GET_ROVER(state, info) { state.roverData = info }
  },
  actions: {
    // Usser
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    // Apod view
    getApod({ commit }, date = null) {
      let queryDate = date ? date : new Date().toISOString().substr(0, 10)
      axios
        .get(`${APOD_ENDPOINT}&date=${queryDate}`)
        .then((response) => {
          commit('GET_APOD', response.data)
        })
        .catch(() => {
          let backup = { url: 'https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg' }
          commit('GET_APOD', backup)
      })
    },
    // Rover view
    getRoverData({ commit }, { sol, rover }) {
      axios
        .get(`${ROVER_ENDPOINT}/${rover}/photos?api_key=${KEY}&sol=${sol}&page=1`)
        .then((response) => {
          commit('GET_ROVER', response.data)
      })
    }
  },
  getters: {
    cameras(state) {
      return state.roverData.photos.map((photo) => {
        return photo.camera.name
      })
    }
  }
})
