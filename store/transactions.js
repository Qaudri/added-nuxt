export const state = () =>({
  admin_transactions: [],
  student_transactions: [],
})

export const getters = {
  getAdminTransactions(state) {
    return state.admin_transactions
  },

  getStudentTransactions(state){
    return state.student_transactions
  }
}

export const actions = {

  setAdminTransactions(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses')
        .then(response => {
          context.commit('LIST_ALL_ADMIN_TRANSACTIONS', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  listStudentCourses(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.student_token

      this.$axios.$get('/api/admins/courses')
        .then(response => {
          context.commit('LIST_ALL_STUDENT_COURSES', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  showAdminCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses/:uuid')
        .then(response => {
          context.commit('SHOW_COURSE', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  createCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      console.log("request sent")
      this.$axios.$post('/api/admins/courses', {
        title: credentials.the_title,
        price: credentials.the_price,
        brief: credentials.the_brief,
        preview: credentials.the_imageUrl,
        duration_in_weeks: credentials.the_duration
      })
        .then(response => {
          // context.commit('CREATE_NEW_COURSE', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  updateCourse(context, credentials, uuid){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$put('/api/admins/courses/' + uuid , {
        title: credentials.edit_title,
        price: credentials.edit_price,
        brief: credentials.edit_description,
        preview: credentials.edit_imageUrl,
        duration_in_weeks: credentials.edit_duration
      })

        .then(response => {
          context.commit('UPDATE_COURSE', response.data)
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },

  deleteCourse(context, uuid){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$delete('/api/admins/courses/' + uuid)
        .then(response => {
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  showAllCourses(context){
    return new Promise((resolve, reject) => {

      this.$axios.$get('/api/listcourses')
        .then(response => {
          context.commit('SHOW_ALL_COURSES', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  }

}

export const mutations = {
  LIST_ALL_ADMIN_TRANSACTIONS(state, payload){
    state.admin_transactions = payload
  },

  LIST_ALL_STUDENT_TRANSACTIONS(state, payload){
    state.student_transactions = payload
  },

  SHOW_ALL_COURSES(state,payload){
    state.items = payload
  }, 

  SHOW_COURSE(state, payload){
    state.selected_course = payload
  }
}