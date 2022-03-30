import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vi: 18.5,
    vf: 46.1,
    t: 2.47,
    a: 0,
    m: 0,
    f: 0
  },
  getters: {
  },
  mutations: {
    calculateAcceleration () {
      if (!this.vf && !this.vi && !this.t){
        this.a = ((this.vf - this.vi) / this.t)
      } else {
        alert('completa todos los campos')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
