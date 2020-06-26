import axios from 'axios'
import vuex from 'vuex'

export const state = () => ({
  counter: 0,
  token: localStorage.getItem('token_access') || '',

})
export const mutations = {
  increment(state) {
    state.counter++
  },
  catchUser(state, val) {
    state.token = val
    console.log(state.token, '<<')
  },
  logout(state) {
    localStorage.setItem('token_access','')
    state.token = ''
  }
}
export const actions = {

  Login({commit}, {email, password}) {
    console.log('log in access . . .')
    axios.post('https://reqres.in/api/login', {email, password})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.token)
          //console.log(response.status)
          const val = response.data.token
          localStorage.setItem('token_access',val)
          commit('catchUser', val)
          return (true)
        }
      })
      .catch(error => {
        alert('Username or Password Incorrected')
        return (error)
      })
  },
  Register ({commit}, {email, password}) {
    console.log('Register access . . .')
    axios.post('https://reqres.in/api/register', {email, password})
      .then((response) => {
        if (response.status === 200) {
          const val = response.data.token
          localStorage.setItem('token_access',val)
          commit('catchUser', val)
          return (true)
        }
      })
      .catch(error => {
        alert('Register Error')
        return (error)
      })
  }
}
