<template>
  <div>
    <menuBar/>
    <div class="container">
      <div class="card" v-if="($store.state.token) == null">
        <h3>Register</h3>
        <form action="#" @submit.prevent="handleClickedRegister">
          <ValidationProvider rules="required|email" v-slot="{errors}">
            <p> Email :
              <input v-model="email" type="text" placeholder="example@email.com">
              <span style="color:red">
              *{{ errors[0] }}
              </span>
            </p>
          </ValidationProvider>

          <ValidationProvider v-slot="{errors}">
            <p>
              Password :
              <input v-model="password" type="password" placeholder="Password">
              <span style="color:red">
              *{{ errors[0] }}
              </span>
            </p>
          </ValidationProvider>
          {{$store.state.token}}
          <center><button class="submit">Register</button></center>

        </form>
      </div>
      <div v-else>
        <Logout :item="text"></Logout>
      </div>
    </div>
  </div>
</template>

<script>
  import menuBar from '@/components/menuBar';
  import Logout from '@/components/Logout';
  import axios from 'axios'
  import {ValidationProvider} from 'vee-validate';

  export default {
    components: {
      menuBar, ValidationProvider, Logout
    },
    data() {
      return {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
        text: 'Register Successful'
      }
    },
    methods: {
      handleClickedRegister() {
        if (this.email === '') {
          alert('Please fill in email')
        } else {
          console.log(this.email, this.password)
          this.$store.dispatch('Register', {
            email: this.email,
            password: this.password,
          })
            .then(success => {
              console.log('register success')
            })
            .catch(error => {
              console.log('register errorr')
              console.log(error.response.data)
              console.log(error.response.status)
            })
        }
      }
    }

  }
</script>
<style>

</style>
