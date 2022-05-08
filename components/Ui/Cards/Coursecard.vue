<template>
  <div class="px-6 py-4 border shadow-lg">
    <SectionsCoursesImage />
      <div>    
        <img :src="imgUrl" class="w-16" alt="">
      </div>
    <div class="pt-4">
      <SectionsCoursesTitle>
      </SectionsCoursesTitle>


      <div class=" extra flex md:block 2xl:flex justify-between items-center mt-4">
        <SectionsCoursesPrice>
        </SectionsCoursesPrice>
        <div class="my-4">
          <a href="./payment.html" class="bg-primary-100 px-4 py-2 text-white font-medium">Enroll now</a>
        </div>
      </div>

    </div>
  </div>
</template

<script>
export default {
 props: {
  imgUrl: String,

 }
}
</script>

<style>

</style>