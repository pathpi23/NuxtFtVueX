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
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.token) {
      commit('catchUser', req.session.token)
    }
  },
   Login ({commit}, {email, password}) {
    // try {
    //   const  data  = await axios.post('/api/login', { email, password })
    //   console.log(data)
    //   commit('catchUser', data)
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     throw new Error('Bad credentials')
    //   }
    //   throw error
    //}
    console.log('log in access . . .')
     axios.post('https://reqres.in/api/login', {email, password})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.token)
          //console.log(response.status)
          const val = response.data.token
          console.log("bf session")
         const suc = axios.post('/api/login', val)
          console.log(suc)
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
