<template>
  <section class="displayContainter">
    <h2>Display</h2>
    <div class="flexContain">
    <p>Initial speed: {{initSpeed}}</p>
    <p>Top speed: {{topSpeed}}</p>
    <p>Time: {{time}}</p>
    <p>Acceleration: {{acceleration}}</p>
    <p>Mass: {{mass}}</p>
    <p>Force: {{force}}</p>
    <p>Angle: {{angle}}</p>
    <p>Distance: {{distance}}</p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'display-comp',
    computed: {
      ...mapState([
        'acceleration', 'topSpeed', 'initSpeed', 'time', 'force', 'mass', 'distance', 'angle'
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
p{
  border: 2.5px solid white;
  border-radius: 5px;
  margin: 1.5vw;
  padding: 1vw;
}
.flexContain{
  display: flex;
}
</style>