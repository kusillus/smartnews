import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoader: false,
    // isLogged: false,

  },
  mutations: {
    setShowLoader:(state, value) => {
      state.showLoader = value
    },
    // setIsLogged:(state, value) => {
    //   state.isLogged = value
    // },
  },
  actions: {
    getShowLoader: state => {
      console.log('getters')
      return state.showLoader
    }
  }
})
