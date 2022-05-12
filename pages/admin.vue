<template>
  <div>
    <LayoutsAdminApp>
      <template v-slot:hero >
        <div class="grid md:grid-cols-2 lg:grid-cols-3 px-10">
          <div class="bg-white p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-lg">Number of courses</p>
              <h1 class="font-bold text-2xl">9</h1>
              <a href="" class="px-4 py-2 ">Manage</a>
            </div>

            <img :src="require('@/assets/images/icons/list.svg')" class="p-4 bg-primary-100 w-6" alt="">
          </div>
        </div>
      </template>
    </LayoutsAdminApp>
  </div>
</template>

<script>
export default {

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