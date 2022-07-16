<template>
  <v-app class="app">
    <NavBar />
    <Display />
    <v-main>
      <router-view />
    </v-main>
    <Clean />
  </v-app>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import Display from "./components/Display.vue";
import Clean from './components/Clean.vue';

export default {
  name: "App",
  components: {
    NavBar,
    Display,
    Clean,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  font-family: "IBM Plex Mono", monospace;
}
</style>
