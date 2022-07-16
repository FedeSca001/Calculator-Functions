<template>
  <section class="containSections">
    <router-link class="links" to="/">Home</router-link> |
    <router-link class="links" to="/aceleration">Aceleration</router-link> |
    <router-link class="links" to="/distance">Distance</router-link> |
    <router-link class="links" to="/work">Work</router-link> |
    <router-link class="links" to="/power">Power</router-link> |
    <router-link class="links" to="/force">Force</router-link>
  </section>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.containSections {
  height: 2.5vw;
  text-align: center;
}
.links {
  font-size: 1.5vw;
  color: black;
}
</style>
