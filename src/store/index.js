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
    distance: 0,
    force: 0,
    angle: 0,
    work: 0
  },
  mutations: {
    calculateAcceleration (state) {
      state.acceleration = (state.topSpeed - state.initSpeed)/ state.time
    },
    calculateForce (state) {
      state.force = state.mass * state.acceleration
    },
    calculateTime (state){
      state.time = (state.topSpeed - state.initSpeed) / state.acceleration
    },
    calculateWork(state){
      let cos = Math.cos(state.angle)
      state.work = state.force * state.distance * cos
    },
    setTime(state,n){
      state.time = n
    },
    setForce(state,n){
      state.force = n
    },
    setDistance(state,n){
      state.distance = n
    },
    setAngle(state,n){
      state.angle = n
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
      state.mass = n
    }
  }
})
