import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL"
// const baseURL = 'https://api.nasa.gov'
const apiKey = 'api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL'
const ROVER_ENDPOINT = "https://api.nasa.gov/mars-photos/api/v1/rovers"

export default new Vuex.Store({
  state: {
    currentUser: null,
    // Apod
    apod: {},
    loading: false,
    // Rover
    roverSearch: {
      sol: null,
      camera: '',
      rover: ''
    },
    roverResult: null,
    counter: []
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    // Mutaciones overlay
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    // GET APOD
    GET_APOD(state, apod) { state.apod = apod },
    // ROVER
    UPDATE_SOL(state, sol) { state.roverSearch = sol },
    UPDATE_CAMERA(state, camera) { state.roverSearch = camera },
    UPDATE_NAME(state, name) { state.roverSearch = name },
    SET_ROVER(state, rover) { state.roverResult = rover },
    RESET_COUNTER(state) {state.counter = [] },
    ADD_COUNTER(state, c) {
      let targetCounter = state.counter.find(x => x.name == c.camera.name)
      if(targetCounter == undefined) {
        let obj = { name: c.camera.name, total: 1 }
        state.counter.push(obj)
        } else { 
          targetCounter.total++
      }
    }
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
     },
     updateSol({commit}, sol) { commit('UPDATE_SOL', sol) },
     updateCamera({commit}, camera) {
      let lowerCamera = camera.toLowerCase()
      if(camera == 'Todas') {
        lowerCamera = ''
      }
      commit('UPDATE_CAMERA', lowerCamera)
     },
     updateName({commit}, rover){
      let lowerRover = rover.toLowerCase()
        commit('UPDATE_NAME', lowerRover)
      },
     getRover({commit, dispatch, state}) {
       commit('SET_LOADING')
       commit('RESET_COUNTER')
       let camera = state.roverSearch.camera ? `&camera=${state.roverSearch.camera}` : ''
       axios.get(`${ROVER_ENDPOINT}/${state.roverSearch.rover}/photos?sol=${state.roverSearch.sol}${camera}&${apiKey}`)
       .then((accept) => {
         let data = accept.data.photos
         if(data.length!=0) {
           dispatch('setRoverResult', data)
           data.forEach(element => 
            commit('ADD_COUNTER', element)
          )
         } else {
           dispatch('setRoverResult', false)
         }
         commit('UNSET_LOADING')
       })
     },
     setRoverResult({commit}, data){ commit('SET_ROVER', data) },
  },
  modules: {
  }
})
