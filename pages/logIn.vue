<template>
  <div>
    <menuBar/>
    <div class="container">
      <ValidationProvider rules="required|email" v-slot="{errors}">
        Email :
        <input v-model="email" type="text" placeholder="example@email.com">
        <span style="color:red">
          *{{ errors[0] }}
        </span>
      </ValidationProvider>
      <br/>
      <ValidationProvider rules="password" v-slot="{errors}">
        Password :
        <input v-model="password" type="password" placeholder="Password">
        <span style="color:red">
          *{{ errors[0] }}
        </span>
      </ValidationProvider>
      <br/>
      <button>Log in</button>
    </div>

  </div>
</template>
<script>
  import menuBar from '@/components/menuBar'
  import {ValidationProvider} from 'vee-validate';

  export default {
    components: {
      menuBar, ValidationProvider
    },
    data() {
      return {
        email: '',
        password: ''
      }
    }

  }
</script>
<style>
  .container {
    padding: 1rem;
  }
</style>
