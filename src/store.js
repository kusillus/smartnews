import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoader: false,
    userData: {
      picture: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/25550437_1585542948178398_657066212158002621_n.jpg?_nc_cat=109&_nc_ht=scontent.flim20-1.fna&oh=3ebc25df8e95f472686b22e66babb1b8&oe=5D0ED9B2',
      name: 'Jesus Guerrero Huitron',
      username: 'jesus.guerrerohutron',
      mail: 'jesus.guerrerohutron@gmail.com'

    }
    // isLogged: false,

  },
  mutations: {
    setShowLoader:(state, value) => {
      state.showLoader = value
    },
    setUserData:(state, value) => {
      state.userData = value
    }
  },
  actions: {
    getShowLoader: state => {
      console.log('getters')
      return state.showLoader
    }
  }
})
