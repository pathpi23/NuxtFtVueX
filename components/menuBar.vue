<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token===''" to="/login">Login</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token===''" to="/register">Register</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token!==''" to="/users">User : {{$store.state.token}}</nuxt-link>
      </li>
      <li>
        <button v-if="$store.state.token!==''" @click="handleClickedLogout">Logout</button>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "menuBar",
    methods: {
      handleClickedLogout() {
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="scss">

  ul {
    padding: 15px;
    overflow: auto;
    background: $primary;
  }
  li {
    :visited{
      color:$visit-prime ;
    }
    :hover{
      text-decoration: none;
      color:$active-prime ;
    }
    display: inline;
    background: $primary;
    color: $active-prime;
    padding: 5px;
  }

</style>
