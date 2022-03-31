<template>
    <section>
        <router-link to="/">Home</router-link> | 
        <router-link to="/aceleration">Aceleration</router-link> | 
        <router-link to="/time">Time</router-link>
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

<style>

</style>