<template>
  <div>
    <form action="">
      <label for="title">Course title</label>
      <input type="text" placeholder="{{course_title}}">

      <label for="title">Course duration</label>
      <input type="text" placeholder="{{course_duration}}">

      <label for="title">Course price</label>
      <input type="text" placeholder="{{course_price}}">
    </form>
  </div>
</template>

<script>
export default {
props: {
  course_title: String,
}
}
</script>

<style>

</style>