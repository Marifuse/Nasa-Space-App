import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// function emptyApod() { return { data: { date: '', title: '', explanation: '', url: ''}, id: null } }

export default new Vuex.Store({
  state: {
    currentUser: null,
    loading: false,
    // currentApod: emptyApod(),
  },
  mutations: {
    // Mutación del usuario
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    // Mutaciones overlay
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    // GET 
    // GET_APOD_DATE(state, date){ state.currentApod.data.date = date },
    // GET_APOD_TITLE(state, title){ state.currentApod.data.title = title },
    // GET_APOD_EXPLANATION(state, explanation){ state.currentApod.data.explanation = explanation  },
    // GET_APOD_URL(state, url){ state.currentApod.data.url = url }
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    // Cómo aplicar un overlay en estas condiciones XD
    // getApodDate({commit}, data) { 
    //   fetch(`https://api.nasa.gov/planetary/apod?api_key=aI8KxRMNGl4gFxrsdb2WJEoiXSytEeBNesxZLCyL`)
    //   .then(response => response.json())
    //   commit('GET_APOD_DATE', data) 
    //   console.log(data)
    // },
  },
  modules: {
  }
})
