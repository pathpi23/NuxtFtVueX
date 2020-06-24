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

<style scoped lang="scss">
$Primary: #3549e;
  ul{
    padding: 5px;
    overflow: auto;
    background: $Primary;
  }
  li{
    display: inline;
    background:  $Primary;
    color: #F5F5F5;
    padding: 5px;
  }
</style>
