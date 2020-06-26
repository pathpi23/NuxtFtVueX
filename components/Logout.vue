<template>
  <div v-else class="card">
    <h3>{{item}}</h3>
    <p>{{$store.state.token}}</p>
    <center><button @click="handleClickedLogout">Log out</button></center>

  </div>
</template>

<script>
  export default {
    name: "Logout",
    props:['item']
    ,
    methods: {
      handleClickedLogout() {
        this.$store.commit('logout')
      }
    }
  }
</script>

<style scoped>

</style>
