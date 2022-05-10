<template>
  <div class="px-6 py-4 border shadow-lg">
    <SectionsCoursesImage>
      <div>    
        <img ::src="imgUrl" class="w-16" alt="">
      </div>
    </SectionsCoursesImage>
    <div class="pt-4">
      <SectionsCoursesTitle>
        <h1 class="text-2xl font-bold">
          {{title}}
        </h1>
      </SectionsCoursesTitle>

      <div class=" extra flex md:block 2xl:flex justify-between items-center mt-4">
        <SectionsCoursesPrice>
          <p class="text-base">
            {{duration}} | <span class="text-primary-100 font-medium">{{price}}</span>
          </p>
        </SectionsCoursesPrice>
        <div class="my-4">
          <button @click="emitRegisterUserEvent" class="bg-primary-100 px-4 py-2 text-white font-medium">Enroll now</button>
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

  methods: {
    emitRegisterUserEvent(){
    this.$emit("RegisterUser")
    }
  }
}
</script>
