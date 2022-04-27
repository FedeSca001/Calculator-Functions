import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acceleration: 0,
    topSpeed: 0,
    initSpeed: 0,
    time: 0,
    mass: 0,
    force: 0
  },
  getters: {
  },
  mutations: {
    calculateAcceleration (state) {
      state.acceleration = (state.topSpeed - state.initSpeed)/ state.time
    },
    calculateForce (state) {
      state.force = state.mass * state.acceleration
    },
    calculateTime (state){
      state.time = (state.topSpeed - state.initSpeed)/ state.acceleration
    },
    setTime(state,n){
      state.time = n
    },
    setTopSpeed(state,n){
      state.topSpeed = n
    },
    setAcceleration(state,n){
      state.acceleration = n
    },
    setInitSpeed(state,n){
      state.initSpeed=n
    },
    setMass(state,n){
      state.mass=n
    }
  },
  actions: {
  },
  modules: {
  }
})
