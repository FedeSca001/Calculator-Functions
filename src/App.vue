<template>
  <v-app>
    <NavBar/>
    <Display/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import Display from "./components/Display.vue";

export default {
  name: 'App',
    components: {
    NavBar,
    Display
},
  data: () => ({
    //
  }),
};
</script>
