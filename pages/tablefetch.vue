<template lang="html">
  <div>
    <div class="loading-page" v-if="loading">
      <p>Loading...</p>
    </div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else class="container">
      <center>


      <tbody>
        <tr class="prim-bg col-height">
          <th class="col-height">color</th>
          <th class="col-height">Id</th>
          <th class="col-height">Name</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td class="col-height col-sm" v-text="post.color"></td>
          <td class="col-height col-md" v-text="post.id"></td>
          <td class="col-height col-sm" v-text="post.name"></td>
        </tr>
        </tbody>
        <div class="container">
          <button>Create</button>
          <button>Delete</button>
          <button>Edit</button>
        </div>

      </center>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      loading: false,
      posts: []
    }),
    async fetch () {
      await axios.get('https://reqres.in/api/unknown')
      .then((response) =>{
        console.log(response.data.data)
        this.posts = response.data.data
      })
    },
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
