<template>
  <div class="absolute bg-secondary-100 z-110 bg-opacity-20 flex items-center justify-center h-full w-full top-0 left-0">
    <div class="bg-white p-6 pb-0">
      <div>
        <div class="border-b text-xl font-semibold flex justify-between">
          <p class="font-medium text-black text-lg">Update Course</p>

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
      </form>
    </div>

  </div>
</template>

<script>
export default {
props: {
  course_title: String,
  course_duration: String,
  course_price: String,
  course_description: String,
  course_contents: String,
}
}
</script>

<style>

</style>