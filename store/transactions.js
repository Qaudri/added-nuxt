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

      this.$axios.$get('/api/admins/transactions')
        .then(response => {
          context.commit('LIST_ALL_ADMIN_TRANSACTIONS', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  setStudentTransactions(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.student_token

      this.$axios.$get('/api/students/transactions')
        .then(response => {
          context.commit('LIST_ALL_STUDENT_TRANSACTIONS', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

}

export const mutations = {
  LIST_ALL_ADMIN_TRANSACTIONS(state, payload){
    state.admin_transactions = payload
  },

  LIST_ALL_STUDENT_TRANSACTIONS(state, payload){
    state.student_transactions = payload
  },

}