<template>
  <div class="h-full w-full fixed z-10  bg-gray-400 bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="scale-out bg-white p-8 w-full md:w-2/3 lg:w-1/3">
      <form action="" @submit.prevent="RegisterUser">

        <label for="email" class="mt-0">Email</label>
        <input v-model="form.email" type="email" name="email" placeholder="Enter your email address">

        <label for="password">Password</label>
        <input v-model="form.password" type="password" name="password"  placeholder="Choose your password">

        <button type="submit" class="submit">Create Account</button>

        <div class="flex justify-center items-center mt-4">
          <p class="text-secondary-100 text-sm mr-2 font-medium">Already registered?</p>
          <UiButtonsSecondary @Pushto="LoginPage" button_title="Login Now!"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data(){
    return{
      form: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    ...mapActions({
      register: 'authentication/registerStudent',
    }),

    RegisterUser(){
      this.register({
        email: this.form.email,
        password: this.form.password,
      })

      .then(() =>{
        this.$router.push({path: '/students/courses'})
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

        this.form.password = '';
      })
    },

    LoginPage(){
      this.$router.push({path:'/students/login'})
    }
  },

  computed: {
    ...mapGetters({
      student_auth_status: 'authentication/isStudentUnauthenticated',
      student_token: 'authentication/get_student_token',
    })
  }
}
</script>

<style>
@font-face {
  font-family: Product Sans;
  src: url('../ProductSans-Regular.woff');
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
  font-weight: 400;
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
  font-size: 16px;
  cursor: pointer;
}

.submit:hover{
  background: #058182;
  color: white;
  transition: .5s ease-in-out;
}

.scale-out{
  animation: scaleout 1s forwards;
}

@keyframes scaleout {
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
}
</style>