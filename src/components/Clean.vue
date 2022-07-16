<template>
    <button @click="clearAll">Clean</button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'clean-comp',
    methods:{
        ...mapMutations(["clearAll"])
    }
}
</script>

<style scoped>
button{
    margin: 2vw auto;
    height: 3vw;
    width: 9vw;
    font-size: 1.8vw;
    border: solid gray 0.2vw;
    border-radius: 2vw;
    color: white;
    background-color: rgb(255, 145, 0);
}
</style>