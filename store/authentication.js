export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
  loginInfo: [
    {
    username: "Noarex",
    password: "Olayemi0102",
    }
  ]

})

export const getters = {
  // session(state) {
  //   return state.session_token != null 
  // },

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
  }
}

export const mutations = {
  SET_AUTHENTICATION_STATUS(state, payload){
    state.auth_status = payload
  },
}