<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login">Login</nuxt-link>
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
  $primary: #4DB6AC;
  $activeprime: #f5f5f5;
  $visitprime: #D0ECE7;

  ul {
    padding: 15px;
    overflow: auto;
    background: $primary;
  }
  li {
    :visited{
      color:$visitprime ;
    }
    :hover{
      text-decoration: none;
      color:$activeprime ;
    }
    display: inline;
    background: $primary;
    color: $activeprime;
    padding: 5px;
  }

</style>
