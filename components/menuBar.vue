<template>
<div>

  <ul>
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li>Home</li>
    <li>Home</li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "menuBar",
      data() {

      },
      methods: {
        handleChangepageClicked(userId) {
          console.log(userId)
          this.$router.push({
            name: 'User-id',
            params: {
              id: userId,
            },
          })
        },
      },

    }
</script>

<style scoped>

  ul{
    padding: 5px;
    overflow: auto;
    background: #35495e;
  }
  li{
    display: inline;
    background: #35495e;
    color: #F5F5F5;
    padding: 5px;
  }
</style>
