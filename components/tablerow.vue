<template>
  <tr>
    <td class="col-height col-sm">{{item.id}}</td>
    <td class="col-height col-md" v-if="!edit">{{item.nameF}}</td>
    <td class="col-height col-sm" v-else><input :value="item.nameF"></td>

    <td class="col-height col-sm" v-if="!edit">{{item.JobF}}</td>
    <td class="col-height col-sm" v-else><input :value="item.JobF"></td>

    <td class="col-height col-sm">
      <button v-if="!edit" @click="editEnable">Edit</button>
      <button v-else @click="saveEdited">save</button>
      <button  @click="$emit('delete-row')">delete</button>

    </td>
  </tr>
</template>

<script>
  export default {
    name: "tablerow",
    props:['item'],
    data:() => ({

    edit:false

  }),
    methods: {
      editEnable() {
        this.edit = true
      },
      saveEdited() {
        this.edit = false
      },

    },


  }

</script>

<style scoped>

</style>
