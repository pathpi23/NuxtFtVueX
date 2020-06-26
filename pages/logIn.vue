<template>
  <div>
    <div class="container">
      <div class="card" v-if="($store.state.token) === ''">
        <h3>Log in</h3>

        <form action="#" @submit.prevent="handleClickedLogin">
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
          <center><button class="submit" >Log in</button></center>

        </form>

      </div>
      <div v-else>
      <Logout :item="text"></Logout>
      </div>
    </div>
  </div>
</template>

<script>
  import Logout from '@/components/Logout';

  import axios from 'axios'
  import {ValidationProvider} from 'vee-validate';

  export default {
    components: {
       ValidationProvider,Logout
    },
    data() {
      return {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
        text: 'You have login!!'
      }
    },
    methods: {
       handleClickedLogin() {
        if (this.email === '') {
          alert('Please fill in email')
        } else {
          console.log(this.email, this.password)
           this.$store.dispatch('Login', {
            email: this.email,
            password: this.password,
          })
            .then(success => {
              console.log('tellme success')
            })
            .catch(error => {
              console.log('errorr')
              console.log(error.response.data)
              console.log(error.response.status)
            })
        }

      },

    }
  }
</script>
<style>

</style>
