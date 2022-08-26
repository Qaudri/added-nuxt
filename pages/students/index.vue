<template>
  <div>
    <LayoutsStudentsApp>
      <template v-slot:hero class="">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10">
          <div class="bg-white border p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Available courses</p>
              <h1 class="font-semibold text-4xl mb-3">{{courseTotal}}</h1>
              <a href="/students/courses" class="px-2 py-1 text-sm border">Check</a>
            </div>

            <img :src="require('@/assets/images/icons/list.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

          <div class="bg-white boder p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Registered Students</p>
              <h1 class="font-semibold text-4xl mb-3">0</h1>
              <a href="" class="px-2 py-1 text-sm border">Manage</a>
            </div>

            <img :src="require('@/assets/images/icons/categories.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

          <div class="bg-white border p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Your transactions</p>
              <h1 class="font-semibold text-4xl mb-3 max-w-xs">#0.00</h1>
              <a href="/transactions" class="px-2 py-1 text-sm border">Manage</a>
            </div>

            <img :src="require('@/assets/images/icons/earning.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

        </div>
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

  computed: {
    ...mapGetters({
      courseTotal : 'courses/getCourseTotal',
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