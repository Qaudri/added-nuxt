<template>
  <div :class="formdisplayed ? 'block' : 'hidden'" class="h-full w-full fixed z-10 bg-black bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">
      <form action="">
        <label for="Name" class="mt-0">Name</label>
        <input type="text" name="Name" id="Name" placeholder="Enter your full name">

        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email address">

        <button type="submit" class="submit">Register</button>
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