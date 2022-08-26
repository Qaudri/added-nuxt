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
  middleware: 'admin-login',

  data(){
    return{
    }
  },

  computed: {
    ...mapGetters({
    }),
  },

  methods: {
    
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