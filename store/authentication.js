export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
  username: Noarex,
  password: Olayemi0102,
})

export const getters = {
  
}