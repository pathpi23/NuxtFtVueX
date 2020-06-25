<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>Home</li>
      <li>Home</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "menuBar",

  }
</script>

<style scoped lang="scss">
  $primary: #35495e;
  ul {
    padding: 5px;
    overflow: auto;
    background: $primary;
  }

  li {
    display: inline;
    background: $primary;
    color: #F5F5F5;
    padding: 5px;
  }
</style>
