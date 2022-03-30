<template>
  <div @keyup.enter="aceleration">
    <v-input label="aceleration">
        <input type="number" v-model="this.a">
    </v-input>
    <p>{{a}}</p>
    <p>{{vi}}</p>
    <p>{{vf}}</p>
    <p>{{t}}</p>
    <p>{{m}}</p>
    <p>{{f}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'aceleration-comp',
        data () {
            return (
            {
                acelerationResult: 0
            }
            )
        },
  methods: {
    aceleration () {
      this.a = (this.vf - this.vi) / this.t
    }
  },
  computed: {
      ...mapState([
        'vi','vf','t','a','m','f'
      ])
  }
}
</script>

<style>

</style>