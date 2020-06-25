import axios from 'axios'

export const state = () => ({
  counter: 0,
  token: null,

})
export const mutations = {
  increment(state) {
    state.counter++
  },
  catchUser(state,val){
    state.token = val
    console.log(state.token , '<<')
  },
  logout(state){
    state.token = null
  }
}
export const actions = {
  Login:  ({commit}, {email, password}) => {
    console.log('log in access . . .')
     axios.post('https://reqres.in/api/login', {email, password})
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data.token)
          //console.log(response.status)
          const val = response.data.token
          commit('catchUser', val )
          return(true)
        }
      })
      .catch(error => {
        alert('Username or Password Incorrected')
        return(error)
      })
  },
}
