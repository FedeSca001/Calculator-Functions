<template>
  <div class="containData" @keydown.enter="calculateForce">
    <h3>Force</h3>
    <h4 class="formula">Force = mass * acceleration</h4>
    <section class="sectionColumns">
      <v-col cols="6" class="variables">
        <p>Mass</p>
        <input
          type="number"
          :placeholder= mass
          @change="
            (e) => {
              setMass(e.target.value);
            }
          "
        />
        <p>Acceleration</p>
        <input
          type="number"
          :placeholder= acceleration
          @change="
            (e) => {
              setAcceleration(e.target.value);
            }
          "
        />
      </v-col>
      <v-col cols="6">
        <p>Force value</p>
        <h3>{{ force }}</h3>
        <button @click="calculateForce" class="buttonCalculate">
          Calculate force
        </button>
      </v-col>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "force-comp",
  methods: {
    ...mapMutations(["setMass", "calculateForce", "setAcceleration"]),
  },
  computed: {
    ...mapState(["acceleration", "force", "mass"]),
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
