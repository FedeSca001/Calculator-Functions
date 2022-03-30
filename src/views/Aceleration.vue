<template>
  <div @keyup.enter="calculateAcceleration" class="containData">
    <h3>Acceleration</h3>
    <h4 class="formula">a = top speed - initial velocity / time</h4>
    <div class="variables">
      <p>Initial velocity - {{vi}}</p>
      <p>Top speed - {{vf}}</p>
      <p>Time - {{t}}</p>
    </div>
    <div>
      <p>Acceleration</p>
      <input type="number">
      <button @click="calculateAcceleration()">Calc</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'aceleration-comp',
  methods: {
    ...mapMutations([
      'calculateAcceleration'
    ])
  },
  computed: {
      ...mapState([
        'vi','vf','t','a'
      ])
  }
}
</script>

<style scoped>
h3{
  font-size: 1.5vw;
}
.formula{
  font-size: 1.5vw;
  background-color: red;
  padding: 0 1vw;
  color: white;
  width: max-content;
  margin: 0.2vw auto;
}
.containData{
  margin: 1vw auto;
  width: 80vw;
}
.variables{
  color: darkgreen;
}
</style>