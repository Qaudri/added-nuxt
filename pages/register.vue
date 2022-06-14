<template>
  <div class="h-full w-full fixed z-10  bg-gray-400 bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="scale-out bg-white p-8 w-full md:w-2/3 lg:w-1/3">
      <div class="flex justify-end w-full">
        <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
      </div>
      <form action="" @submit.prevent="Register">

        <label for="email" class="mt-0">Email</label>
        <input v-model="form.email" type="email" name="email" placeholder="Enter your email address">

        <label for="password">Password</label>
        <input v-model="form.password" type="password" name="password"  placeholder="Choose your password">

        <button type="submit" class="submit">Register</button>

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

    Register(){
      this.register({
        email: this.form.email,
        password: this.form.password,
      })

      .then(() =>{
        this.$router.push({name: 'dashboard'})
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

        this.form.password = '';
      })
    },

    LoginPage(){
      this.$router.push({path:'/login'})
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