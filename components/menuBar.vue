<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token==''" to="/login">Login</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token==''" to="/register">Register</nuxt-link>
      </li>
      <li>
        <nuxt-link v-if="$store.state.token!=''" to="/users">User : {{$store.state.token}}</nuxt-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "menuBar",

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
