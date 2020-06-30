<template>
  <tr>
    <td class="col-height col-sm">{{item.userId}}</td>
    <td class="col-height col-md" v-if="!edit">{{item.id}}</td>
    <td class="col-height col-sm" v-else><input :value="item.id"></td>

    <td class="col-height col-sm" v-if="!edit">{{item.title}}</td>
    <td class="col-height col-sm" v-else><input :value="item.title"></td>

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
        this.$emit('edit-change')
      },
      saveEdited() {
        this.edit = false
      },

    },


  }

</script>

<style scoped>

</style>
