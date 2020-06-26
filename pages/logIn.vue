<template>
  <div>
    <menuBar/>
    <div class="container">
      <div class="card" v-if="($store.state.token) == null">
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

          <button class="submit" >Log in</button>
        </form>

      </div>
      <div v-else class="card">
        <p>You have login!</p>
        <p>{{$store.state.token}}</p>
        <button @click="handleClickedLogout">Log out</button>

      </div>
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
      handleClickedLogout() {
        this.$store.commit('logout')
      }
    }
  }
</script>
<style>

</style>
