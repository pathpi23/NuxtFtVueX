<template>
  <div>
    <div class="container">
      <div class="card">
        <h3>Click to add count</h3>
        <p>Counter is : {{ $store.state.counter }}</p>
        <button @click="increment"> Add data</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    components: {

    },
    middleware: 'auth',

    data() {
      return {}
    },
    fetch({store}) {
    },
    computed: mapState([
      'counter'
    ]),
    methods: {
      increment() {
        this.$store.commit('increment')
      }
    }
  }
</script>
<style>

</style>
