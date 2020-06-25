<template>
  <div class="container">
    <nuxt-link to="/login"> Login </nuxt-link>
    <div>  Counter is : {{ $store.state.counter }}</div>
    <div> <button @click="increment"> Add data</button></div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return{

      }
    },

  fetch ({ store }) {
    store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
<style>
  .container{
    padding: 20px;
  }
</style>
