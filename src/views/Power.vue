<template>
  <div @keyup.enter="calculateAcceleration" class="containData">
    <h3>Power</h3>
    <h4 class="formula">Power = work / time</h4>
    <section class="sectionColumns">
      <v-col cols="6" class="variables">
        <p>Work</p>
        <input
          type="number"
          placeholder="Force"
          @change="
            (e) => {
              setWork(e.target.value);
            }
          "
        />
        <p>Time</p>
        <input
          type="number"
          placeholder="Distance"
          @change="
            (e) => {
              setTime(e.target.value);
            }
          "
        />
      </v-col>
      <v-col cols="6">
        <p>Power value</p>
        <h3>{{ power }}</h3>
        <button @click="calculatePower()" class="buttonCalculate">
          Calculate Powe
        </button>
      </v-col>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "power-comp",
  methods: {
    ...mapMutations(["calculatePower", "setTime", "setWork"]),
  },
  computed: {
    ...mapState(["power"]),
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
