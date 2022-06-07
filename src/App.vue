<template>
  <v-app class="app">
    <NavBar />
    <Display />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import Display from "./components/Display.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Display,
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
