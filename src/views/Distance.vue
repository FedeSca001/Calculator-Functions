<template>
  <div @keyup.enter="calculateDistance" class="containData">
    <h3>Acceleration</h3>
    <h4 class="formula">distance = speed * time</h4>
    <section class="sectionColumns">
      <v-col cols="6" class="variables">     
        <p>Speed</p>
        <input
          type="number"
          placeholder="Speed in m/s"
          @change="
            (e) => {
              setSpeed(e.target.value);
            }
          "
        />
        <p>Time</p>
        <input
          type="number"
          placeholder="Time in s"
          @change="
            (e) => {
              setTime(e.target.value);
            }
          "
        />
      </v-col>
      <v-col cols="6">
        <p>Distance value</p>
        <h3>{{ distance }}</h3>
        <button @click="calculateDistance" class="buttonCalculate">
          Calculate Distance
        </button>
      </v-col>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name:'distance-comp',
    methods: {
    ...mapMutations([
      "calculateDistance",
      "setTime",
      "setSpeed"
    ]),
  },
  computed: {
    ...mapState(["speed", "time", "distance"]),
  },
}
</script>

<style scoped>
h3 {
  font-size: 1.5vw;
}
.formula {
  font-size: 1.5vw;
  background-color: red;
  padding: 0 1vw;
  color: white;
  width: max-content;
  margin: 0.2vw auto;
}
.sectionColumns {
  display: flex;
  flex-wrap: wrap;
}
.containData {
  margin: 1vw auto;
  width: 80vw;
}
.variables {
  color: darkgreen;
}
.buttonCalculate {
  padding: 1vw;
  border-radius: 3vw;
  background-color: lightgreen;
}
</style>