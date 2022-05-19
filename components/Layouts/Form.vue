<template>
  <div>
    <form action="">
      <label for="title">Course title</label>
      <input type="text" placeholder="{{course_title}}">
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