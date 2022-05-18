<template>
  <div class="h-full w-full fixed z-10 bg-gray-400 bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">

      <form action="" @submit.prevent="attemptLogin">
        <label for="Name" class="mt-0">Email</label>
        <input v-model="form.email" type="email" name="email" id="email" placeholder="Enter your email address">

        <label for="email">Password</label>
        <input v-model="form.password" type="password" name="password" id="password" placeholder="Enter your password">

        <button type="submit" class="submit">Register</button>
      </form>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data(){
    return{
      form: {
        email: '',
        password: '',
      },
    }
  },

  ...mapGetters ({
    loginInfo : 'authentication/getLoginInfo',
    auth_status: 'authentication/isUnauthenticated'
  }),

  methods: {

    ...mapActions({
      tryLogin : 'authentication/tryLogin',
      retrieveLoggedUserInfo: 'authentication/retrieveLoggedUserInfo'

    }),

    verifyInfo(){
      if (form.email === loginInfo.email) {
        if (form.password === loginInfo.password) {
          this.tryLogin({
            auth_status: true
          })
        } else {
          console.log("Wrong password inputed")
        }
      } else {
        console.log("Wrong email inputed")
      }
    },

    attemptLogin(){
      this.verifyInfo()
    }
  }
}
</script>

<style>
  form{
    width: 100%;
    display: block;
    box-sizing: border-box;
  }

  label{
    font-weight: 600;
    color: #058182;
    margin-top: 30px;
    display: block;
  }

  input{
    padding: 10px 15px;
    margin: 10px 0;
    display: block;
    width: 100%;
    border: 2px solid #222222;
  }


  input:focus{
    border: 2px solid #058182;
    border-radius: 0;
    outline: none;
    color: #058182;
  }

  .submit{
    margin-top: 2rem;
    width: 100%;
    background-color: transparent;
    border: 2px solid #058182;
    text-transform: capitalize;
    padding: 10px;
    color: #058182;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }

  .submit:hover{
    background: #058182;
    color: white;
    transition: .5s ease-in-out;
  }
</style>