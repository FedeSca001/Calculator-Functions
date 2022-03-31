import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acceleration: 0,
    topSpeed: 0,
    initSpeed: 0,
    time: 0
  },
  getters: {
  },
  mutations: {
    calculateAcceleration (state) {
      state.acceleration = (state.topSpeed - state.initSpeed)/ state.time
    },
    setTime(state,n){
      state.time = n
    },
    setTopSpeed(state,n){
      state.topSpeed = n
    },
    setInitSpeed(state,n){
      state.initSpeed=n
    }
  },
  actions: {
  },
  modules: {
  }
})
