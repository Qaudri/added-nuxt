<template>
  <div class="px-10 absolute bg-secondary-100 z-110 bg-opacity-20 flex items-center justify-center h-full w-full top-10 left-0">
    <div class="scale-out bg-white p-6 w-full md:w-2/3 lg:w-1/2">

      <div>
        <div class="border-b text-xl font-semibold flex justify-between">
          <p class="font-medium text-black text-lg">Create Course</p>
          <div class="">
            <button>
              <slot />
            </button>
          </div>

        </div>
      </div>

      <form action="" >
        <label for="title">Course title</label>
        <input type="text" :placeholder="course_title">

        <label for="title">Course duration</label>
        <input type="text" :placeholder="course_duration">

        <label for="title">Course price</label>
        <input type="text" :placeholder="course_price">

        <label for="title">Course decription</label>
        <input type="text" :placeholder="course_description">

        <label for="title">Course contents</label>
        <input type="text" ::placeholder="course_contents">

        <button @click="emitSubmitFunction"></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>