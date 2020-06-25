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
      <ValidationProvider v-slot="{errors}">
        Password :
        <input v-model="password" type="password" placeholder="Password">
        <span style="color:red">
          *{{ errors[0] }}
        </span>
      </ValidationProvider>
      <br/>
      <button @click="handleClickedLogin">Log in</button>
      <button @click="handleClickedLogout">Log out</button>
      <p>{{ $store.state.token }}</p>
    </div>

  </div>
</template>
<script>
  import menuBar from '@/components/menuBar';
  import axios from 'axios'
  import {ValidationProvider} from 'vee-validate';

  export default {
    components: {
      menuBar, ValidationProvider
    },
    data() {
      return {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    },
    methods: {
      handleClickedLogin() {
        if (this.email == '') {
          alert('Please fill in email')
        }
        else {
          console.log(this.email, this.password)
          this.$store.dispatch('Login', {
            email: this.email,
            password: this.password,
          })
            .then(success => {
              console.log('tellme')
            })
            .catch(error => {
              console.log('errorr')
              console.log(error.response.data)
              console.log(error.response.status)
            })
        }

      },
      handleClickedLogout() {
        this.$store.commit('logout')
      }
    }
  }
</script>
<style>
  .container {
    padding: 1rem;
  }
</style>
