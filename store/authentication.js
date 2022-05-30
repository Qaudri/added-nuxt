export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
  user: {},
})

export const getters = {
  session(state) {
    return state.session_token != null 
  },

  isUnauthenticated(state){
    return state.auth_status
  },

  getLoginInfo(state){
    return state.loginInfo
  }

}

export const actions = {
  tryLogin(context){
    context.commit('SET_AUTHENTICATION_STATUS', true)
  },

  tryRegistration(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/user/auth/register', {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_SESSION_TOKEN', response.data.token)
          context.commit('SET_AUTHENTICATION_STATUS', true)
          localStorage.setItem('ubit_user_session_token', response.data.token)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },
}

export const mutations = {
  SET_AUTHENTICATION_STATUS(state, payload){
    state.auth_status = payload
  },
}