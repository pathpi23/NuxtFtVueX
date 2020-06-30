<template>
  <tr>
    <td class="col-height col-sm">{{item.userId}}</td>
    <td class="col-height col-md" v-if="!edit">{{item.id}}</td>
    <td class="col-height col-sm" v-else><input v-model="id1"></td>

    <td class="col-height col-sm" v-if="!edit">{{item.title}}</td>
    <td class="col-height col-sm" v-else><input v-model="title1"></td>

    <td class="col-height col-sm">
      <button v-if="!edit" @click="editEnable">Edit</button>
      <button v-else @click="saveEdited">save</button>
      <button @click="$emit('delete')">delete</button>

    </td>
  </tr>
</template>

<script>
  export default {
    name: "tablerow",
    props: ['item'],
    data: () => ({
      id1: '',
      title1: '',

      edit: false

    }),
    methods: {
      editEnable() {
        this.edit = true
      },
      saveEdited() {
        this.edit = false
        this.$emit('save',this.id1,this.title1)

      },

    },


  }

</script>

<style scoped>

</style>
