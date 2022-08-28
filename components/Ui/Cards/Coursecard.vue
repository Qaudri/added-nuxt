<template>
  <div class="p-6 bg-gray-50 flex md:block items-center">
    <div class="border-r-secondary-100 border-r md:border-r-0 md:border-b pr-4 md:pb-4 md:border-b-secondary-100">
      <SectionsCoursesImage >
      <div>    
        <img :src="imgUrl" class="w-20 md:w-16" alt="">
      </div>
    </SectionsCoursesImage>
    </div>

    <div class="pl-4 md:pt-4">
      <SectionsCoursesTitle>
        <h1 class="text-2xl font-normal">
          {{title}}
        </h1>
      </SectionsCoursesTitle>

      <div class="extra block justify-between items-center mt-2">
        <SectionsCoursesPrice>
          <p class="text-base">
            {{duration}} weeks | <span class="text-primary-100 font-medium">#{{price}}</span>
          </p>
        </SectionsCoursesPrice>
        <div class="mt-2">
          <slot />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
props: {
    imgUrl: String,
    duration: Number,
    title: String,
    price: Number,
  },

}
</script>

<style>
.bg-gray-50{
  background-color: #f9f9f9 !important;
}
</style>