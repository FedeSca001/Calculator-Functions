<template>
    <section class="containSections">
        <router-link class="links" to="/">Home</router-link> | 
        <router-link class="links" to="/aceleration">Aceleration</router-link> | 
        <router-link class="links" to="/time">Time</router-link> | 
        <router-link class="links" to="/power">Power</router-link> | 
        <router-link class="links" to="/work">Work</router-link> | 
        <router-link class="links" to="/force">Force</router-link>
    </section>
</template>

<script>
export default {
    name: 'nav-bar',
    data(){
        return {
            text: 'center'
        }
    }
}
</script>

<style scoped>
.containSections{
    text-align: center;
}
.links{
    color: black;

}
</style>