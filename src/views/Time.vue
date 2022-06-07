<template>
  <div @keyup.enter="calculateAcceleration" class="containData">
    <h3>Time</h3>
    <h4 class="formula">Time = top speed - initial speed / acceleration</h4>
    <section class="sectionColumns">
      <v-col cols="6" class="variables">
        <p>Initial velocity</p>
        <input
          type="number"
          placeholder="Initial speed in m/s"
          @change="
            (e) => {
              setInitSpeed(e.target.value);
            }
          "
        />
        <p>Top speed</p>
        <input
          type="number"
          placeholder="Top speed in m/s"
          @change="
            (e) => {
              setTopSpeed(e.target.value);
            }
          "
        />
        <p>Acceleration</p>
        <input
          type="number"
          placeholder="Time in m/s"
          @change="
            (e) => {
              setAcceleration(e.target.value);
            }
          "
        />
      </v-col>
      <v-col cols="6">
        <p>Acceleration value</p>
        <h3>{{ acceleration }}</h3>
        <button @click="calculateTime" class="buttonCalculate">
          Calculate Time
        </button>
      </v-col>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "time-comp",
  methods: {
    ...mapMutations([
      "calculateTime",
      "setAcceleration",
      "setTopSpeed",
      "setInitSpeed",
    ]),
  },
  computed: {
    ...mapState(["acceleration", "topSpeed", "initSpeed", "time"]),
  },
};
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
