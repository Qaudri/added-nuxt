<template>
  <div>
    <LayoutsAdminApp>
      <template v-slot:hero class="">
      </template>

    </LayoutsAdminApp>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  middleware: 'student-login',

  data(){
    return{
    }
  },

  methods: {
    ...mapActions({
      setAllTransactions: 'transactions/setAdminTransactions'
    }),
  },

  computed: {
    ...mapGetters({
      allTransactions: 'transactions/getStudentTransactions',
    }),
  },

  created() {
    this.showAllCourses()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

body{
  font-family: "Poppins", sans-serif;
}

.bg-gray-50{
  background-color: #f7f7f7 !important;
}
</style>