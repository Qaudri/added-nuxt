<template>
  <div class="h-full w-full fixed z-10 bg-gray-400 bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">

      <form action="" @submit.prevent="signIn">
        <label for="Name" class="mt-0">Email</label>
        <input autocomplete="off" v-model="form.email" type="email" name="email" id="email" placeholder="Enter your email address">

        <label for="email">Password</label>
        <input autocomplete="on" v-model="form.password" type="password" name="password" id="password" placeholder="Enter your password">

        <button type="submit" class="submit">Login</button>
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
    auth_status: 'authentication/admin_auth_status',
    token: 'authentication/admin_token',
  }),

  methods: {

    ...mapActions({
      login: 'authentication/loginAdmin',
      retrieveAdminInfo: 'authentication/retrieveAdminInfo'
    }),

    signIn(){
      this.login({
        email: this.form.email,
        password: this.form.password
      })

      .then(() =>{
        this.$router.push({name: 'admin'})
        
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

        this.form.password = '';
      })
    }
  }
}
</script>

<style>
  @font-face {
    font-family: Product Sans;
    src: url('../../ProductSans-Regular.woff');
  }

  body{
    font-family: "Product Sans", sans-serif;
    overflow-x: hidden;
  }
  
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