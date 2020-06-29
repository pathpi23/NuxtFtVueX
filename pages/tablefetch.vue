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
        <div class="paginate1">
          <div class="paging" href="#" v-if="this.pageOn!=1" @click="decPage">&laquo;</div>
          <div :class="`paging ${n === pageOn ? 'active':''}`"
               v-for="n in pageTotal"
               :v-model="pageOn"
               @click="handleSelectedPage(n)">
            {{n}}
          </div>
          <div class="paging" href="#" v-if="this.pageOn!=this.pageTotal" @click="incPage">&raquo;</div>
        </div>

        <!--Pagination-->
        <div>
          <input v-model="name1">
          <input v-model="job1">
          <br>
          {{name1}}
          {{job1}}
          {{wordType}}
        </div>
        <tbody>
        <tr class="prim-bg col-height">
          <th class="col-height col-sm">id</th>
          <th class="col-height col-md">name</th>
          <th class="col-height col-sm">Job</th>
          <th class="col-height col-sm"></th>

        </tr>

        <tablerow v-for="(item, index) in wordType" :key="item.id" :item="item" v-on:delete-row="deleteThisRow(index)"></tablerow>
        <!--          <td class="col-height col-sm" >{{item.id}}</td>-->
        <!--          <td class="col-height col-md" v-if="!edit">{{item.nameF}}</td>-->
        <!--          <td class="col-height col-sm" v-else><input></td>-->

        <!--          <td class="col-height col-sm" v-if="!edit">{{item.JobF}}</td>-->
        <!--          <td class="col-height col-sm" v-else><input></td>-->

        <!--          <td class="col-height col-sm" ><button @click="editEnable">Edit</button></td>-->

        </tbody>
        <div class="container">
          <button @click="createToArray()">Create</button>
          <button>Delete</button>
          <button>Edit</button>
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
    data: () => ({
      loading: false,
      posts: [],
      pageOn: 1,
      pageTotal: 0,
      lastPage: 0,
      arrayTest: [],
      name1: '',
      job1: '',
      id: 1,
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
        await axios.get('https://reqres.in/api/unknown', {params: {page: value}})
          .then((response) => {
            this.pageTotal = response.data.total_pages
            this.posts = response.data.data
          })
      },
      incPage() {
        this.pageOn += 1
        this.handleSelectedPage(this.pageOn)
      },
      decPage() {
        this.pageOn -= 1
        this.handleSelectedPage(this.pageOn)

      },
      createToArray() {
        const Object = {id: this.id, nameF: this.name1, JobF: this.job1}
        this.id += 1
        console.log(Object)
        this.wordType.push(Object)
      },
      deleteThisRow(index) {
        this.wordType.splice(index, 1);
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
