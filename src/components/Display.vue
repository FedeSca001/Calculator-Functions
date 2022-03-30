<template>
  <div class="displayContainter">
    <h2>Display</h2>
    <p>Initial velocity: {{vi}}</p>
    <p>Acceleration: {{a}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'display-comp',
    computed: {
      ...mapState([
        'vi','vf','t','a','m','f'
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