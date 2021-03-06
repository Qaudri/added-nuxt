export const state = () => ({
  admin_token: process.browser ? localStorage.getItem('admin_token') : null || null,
  admin_auth_status: '',

  student_token: process.browser ? localStorage.getItem('student_token') : null || null,
  student_auth_status: '',
  student: {},
  admin: {}
})

export const getters = {
  get_admin_token(state) {
    return state.admin_token != null 
  },

  isAdminUnauthenticated(state){
    return state.admin_auth_status
  },

  get_student_token(state) {
    return state.student_token != null 
  },

  isStudentUnauthenticated(state){
    return state.student_auth_status
  },

}

export const actions = {
  registerStudent(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/students/auth/register', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_STUDENT_TOKEN', response.data.token)
          context.commit('SET_STUDENT_AUTHENTICATION_STATUS', true)
          localStorage.setItem('student_token', response.data.token)
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
          context.commit('SET_STUDENT_TOKEN', response.data.token)
          context.commit('SET_STUDENT_AUTHENTICATION_STATUS', true)
          localStorage.setItem('student_token', response.data.token)

          context.dispatch('retrieveStudentInfo')

          resolve(response)
        })


        .catch(function (error) {
          reject(error)
        })
    })
  },

  loginAdmin(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/admins/auth/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_ADMIN_TOKEN', response.data.token)
          context.commit('SET_ADMIN_AUTHENTICATION_STATUS', true)
          localStorage.setItem('admin_token', response.data.token)

          context.dispatch('retrieveAdminInfo')

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
          context.commit('SET_STUDENT_INFO', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  retrieveAdminInfo(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token

      this.$axios.$get('/api/admins/account')
        .then(response => {
          context.commit('SET_ADMIN_INFO', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  destroyAdminSession(context) {
    context.commit('SET_ADMIN_TOKEN', null)
    context.commit('SET_ADMIN_AUTHENTICATION_STATUS', false)
    localStorage.removeItem('admin_token')
  },

  destroyStudentSession(context) {
    if (context.getter.session) {
      context.commit('SET_STUDENT_TOKEN', null)
      context.commit('SET_ADMIN_AUTHENTICATION_STATUS', false)
      localStorage.removeItem('student_token', response.data.token)
    }
  },

}

export const mutations = {
  SET_STUDENT_AUTHENTICATION_STATUS(state, payload){
    state.student_auth_status = payload
  },

  SET_ADMIN_AUTHENTICATION_STATUS(state, payload){
    state.admin_auth_status = payload
  },

  SET_ADMIN_TOKEN(state, payload){
    state.admin_token = payload
  },

  SET_STUDENT_TOKEN(state, payload){
    state.student_token = payload
  },

  SET_STUDENT_INFO(state, payload){
    state.student = payload
  },

  SET_ADMIN_INFO(state, payload){
    state.admin = payload
  }
}