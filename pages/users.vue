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
          <th class="col-height">User Id</th>
          <th class="col-height">Posts Id</th>
          <th class="col-height">Name</th>
          <th class="col-height"></th>

        </tr>
<!--        <tr v-for="post in selectedPage(posts)" :key="post.id">-->
          <tablerow v-for="(post, index) in selectedPage(posts)" :key="post.id" :item="post" v-on:delete-row="deleteThisRow(index)"></tablerow>

<!--          <td class="col-height col-sm" v-text="post.userId"></td>-->
<!--          <td class="col-height col-md" v-text="post.id"></td>-->
<!--          <td class="col-height col-lg" v-text="post.title"></td>-->
<!--        </tr>-->
        </tbody>
        <div class="paginate1">
          <div class="paging" href="#" v-if="this.pageOn!=1" @click="decPage">&laquo;</div>
          <div :class="`paging ${n === pageOn ? 'active':''}`"
               v-for="n in pageTotal"
               :v-model="pageOn"
               @click="selPage(n)">
            {{n}}
          </div>
          <div class="paging" href="#" v-if="this.pageOn!=this.pageTotal" @click="incPage">&raquo;</div>
        </div>

        <!--Pagination-->
        <div>
          <input v-model="body1">
          <input v-model="id1">
          <input v-model="title1">
          <br>

        </div>
<!--        <tbody>-->
<!--        <tr class="prim-bg col-height">-->
<!--          <th class="col-height col-sm">id</th>-->
<!--          <th class="col-height col-md">name</th>-->
<!--          <th class="col-height col-sm">Job</th>-->
<!--          <th class="col-height col-sm"></th>-->

<!--        </tr>-->

<!--        <tablerow v-for="(item, index) in wordType" :key="item.id" :item="item" v-on:delete-row="deleteThisRow(index)"></tablerow>-->
<!--                  <td class="col-height col-sm" >{{item.id}}</td>-->
<!--                  <td class="col-height col-md" v-if="!edit">{{item.nameF}}</td>-->
<!--                  <td class="col-height col-sm" v-else><input></td>-->

<!--                  <td class="col-height col-sm" v-if="!edit">{{item.JobF}}</td>-->
<!--                  <td class="col-height col-sm" v-else><input></td>-->

<!--                  <td class="col-height col-sm" ><button @click="editEnable">Edit</button></td>-->

<!--        </tbody>-->
        <div class="container">
          <button @click="createToArray()">Create</button>
        </div>
      </center>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import tablerow from '@/components/tablerow';

  export default {
    components: {
      tablerow
    },
    middleware: 'auth',

    data: () => ({
      loading: false,
      posts: [],
      pageSize: 10,
      pageOn: 1,
      pageTotal: 1,
      lastPage: 0,
      arrayTest: [],
      id1: '',
      title1: '',
      id: 1,
      body1:'',
      wordType: [],
      edit: false
      //isTrue : true,
      //isActive: false
    }),
    async fetch() {
      await this.handleSelectedPage(this.pageOn)
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
      async handleSelectedPage(value) {
        this.pageOn = value
        //Change page
        await axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            this.posts = response.data
            this.pageTotal = Math.ceil(this.posts.length / this.pageSize)
            console.log(this.pageTotal, 'length')
          })
      },
      incPage() {
        this.pageOn += 1
        //this.handleSelectedPage(this.pageOn)
      },
      decPage() {
        this.pageOn -= 1
       // this.handleSelectedPage(this.pageOn)

      },
      selPage(val){
        this.pageOn = val
      },
      createToArray() {
        const Object = {userId: this.id, id: this.id1, title: this.title1 ,body:this.body1}
        this.id += 1
        console.log(Object)
        this.posts.push(Object)
        this.pageTotal = Math.ceil(this.posts.length / this.pageSize)

      },
      deleteThisRow(index) {
        this.posts.splice(index, 1);
        this.pageTotal = Math.ceil(this.posts.length / this.pageSize)
      },
      selectedPage(datas) {
        return datas.slice(0+(this.pageSize*(this.pageOn-1)),this.pageSize+(this.pageSize*(this.pageOn-1)))
      }

      // editEnable() {
      //   this.edit = true
      // }
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
