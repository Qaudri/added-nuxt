<template>
  <div>
    <LayoutsStudentsApp>
      <template v-slot:hero class="">
      </template>

    </LayoutsStudentsApp>
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
      setAllTransactions: 'transactions/setStudentTransactions'
    })
  },

  computed: {
    ...mapGetters({
      allTransactions: 'transactions/getStudentTransactions',
    }),
  },

  created() {
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
.bg-gray-50{
  background-color: #f7f7f7 !important;
}
</style>