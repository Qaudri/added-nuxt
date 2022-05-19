<template>
  <div>
    <form action="">
      <label for="title">Course title</label>
      <input type="text" placeholder="{{course_title}}">

      <label for="title">Course duration</label>
      <input type="text" placeholder="{{course_duration}}">

      <label for="title">Course price</label>
      <input type="text" placeholder="{{course_price}}">

      <label for="title">Course decription</label>
      <input type="text" placeholder="{{course_description}}">

      <label for="title">Course contents</label>
      <input type="text" placeholder="{{course_contents}}">
    </form>
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