<template>
  <div class="displayContainter">
    <h2>Display</h2>
    <p>Initial speed: {{initSpeed}}</p>
    <p>Top speed: {{topSpeed}}</p>
    <p>Time: {{time}}</p>
    <p>Acceleration: {{acceleration}}</p>
    <p>Mass: {{mass}}</p>
    <p>Force: {{force}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'display-comp',
    computed: {
      ...mapState([
        'acceleration', 'topSpeed', 'initSpeed', 'time', 'force', 'mass'
      ])
    }
}
</script>

<style scoped>
.displayContainter{
  width: 90vw;
  height: 20vw;
  margin: 0 auto;
  padding: 2vw;
  background-color: green;
  border: 0.4vw solid grey;
  color: white;
  border-radius: 0.5vw;
}
h2{
  font-size: 2vw;
}
</style>