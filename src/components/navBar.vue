<template>
    <section class="containSections">
        <router-link to="/">Home</router-link> | 
        <router-link to="/aceleration">Aceleration</router-link> | 
        <router-link to="/time">Time</router-link> | 
        <router-link to="/power">Power</router-link> | 
        <router-link to="/force">Force</router-link>
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
</style>