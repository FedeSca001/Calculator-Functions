<template>
    <div @keyup.enter="calculateAcceleration" class="containData">
    <h3>Work</h3>
    <h4 class="formula">Work = force * distance * cos(angle)</h4>
    <section class="sectionColumns">
      <v-col cols="6" class="variables">
        <p>Force</p>
        <input
            type="number"
            placeholder="Force"
            @change="(e)=>{setForce(e.target.value)}">
        <p>Distance</p>
        <input
            type="number"
            placeholder="Distance"
            @change="(e)=>{setDistance(e.target.value)}">
        <p>Angle</p>
        <input
            type="number"
            placeholder="Angle"
            @change="(e)=>{setAngle(e.target.value)}">
      </v-col>
      <v-col cols="6">
        <p>Work value</p>
        <h3>{{work}}</h3>
        <button
        @click="calculateWork()"
          class="buttonCalculate">
            Calculate Work
        </button>
      </v-col>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'work-comp',
    methods: {
        ...mapMutations([
            'calculateWork', 'setForce', 'setDistance', 'setAngle'
        ])
    },
    computed: {
        ...mapState([
            'work'
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
.sectionColumns{
  display: flex;
  flex-wrap: wrap;
}
.containData{
  margin: 1vw auto;
  width: 80vw;
}
.variables{
  color: darkgreen;
}
.buttonCalculate{
  padding: 1vw;
  border-radius: 3vw;
  background-color: lightgreen;
}
</style>