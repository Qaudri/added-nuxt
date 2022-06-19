<template>
  <div class="px-6 py-4 border shadow-lg">
    <SectionsCoursesImage>
      <div>    
        <img :src="imgUrl" class="w-16" alt="">
      </div>
    </SectionsCoursesImage>
    <div class="pt-4">
      <SectionsCoursesTitle>
        <h1 class="text-2xl font-bold">
          {{title}}
        </h1>
      </SectionsCoursesTitle>

      <div class="extra block justify-between items-center mt-4">
        <SectionsCoursesPrice>
          <p class="text-base">
            {{duration}} weeks | <span class="text-primary-100 font-medium">#{{price}}</span>
          </p>
        </SectionsCoursesPrice>
        <div class="my-4">
          <slot />
        </div>
      </div>

    </div>
  </div>
</template

<script>


<script>
export default {
props: {
    imgUrl: String,
    duration: String,
    title: String,
    price: String,
  },

}
</script>
