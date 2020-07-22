import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL"

export default new Vuex.Store({
  state: {
    currentUser: null,
    apod: {},
    loading: false,
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    // Mutaciones overlay
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    // GET 
    GET_APOD(state, apod) { state.apod = apod }
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
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
    }
  },
  modules: {
  }
})
