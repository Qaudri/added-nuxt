export const state = () => ({
  session_token: process.browser ? localStorage.getItem('session_token') : null || null,
  auth_status: false,
  student: {},
})

export const getters = {
  session(state) {
    return state.session_token != null 
  },

  isUnauthenticated(state){
    return state.auth_status
  },

}

export const actions = {
  tryLogin(context){
    context.commit('SET_AUTHENTICATION_STATUS', true)
  },

  registerStudent(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/students/auth/register', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_SESSION_TOKEN', response.data.token)
          context.commit('SET_AUTHENTICATION_STATUS', true)
          localStorage.setItem('session_token', response.data.token)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  loginStudent(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/students/auth/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_SESSION_TOKEN', response.data.token)
          context.commit('SET_AUTHENTICATION_STATUS', true)
          localStorage.setItem('session_token', response.data.token)

          context.dispatch('retrieveStudentInfo')

          resolve(response)
        })


        .catch(function (error) {
          reject(error)
        })
    })
  },

  retrieveStudentInfo(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token

      this.$axios.$get('/api/students/account')
        .then(response => {
          context.commit('SET_USER_INFO', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  destroySession(context, credentials) {
    if (context.getter.session) {
      context.commit('SET_SESSION_TOKEN', null)
      context.commit('SET_AUTHENTICATION_STATUS', false)
      localStorage.removeItem('session_token', response.data.token)
    }
  
  },

}

export const mutations = {
  SET_AUTHENTICATION_STATUS(state, payload){
    state.auth_status = payload
  },

  SET_SESSION_TOKEN(state, payload){
    state.session_token = payload
  },

  SET_USER_INFO(state, payload){
    state.student = payload
  }
}