<template>
  <div>
    <div>  Counter is : {{$store.state.counter }}</div>
    <div> <button @click="increment"> Add data</button></div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
export default {
  // fetch(context) is called by the server-side
  // and before instantiating the component
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
