<template>
  <div :class="formdisplayed ? 'block' : 'hidden'" class="h-full w-full fixed z-10 bg-gray-400 bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
    <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">
      <form action="">
        <label for="Name" class="mt-0">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email address">

        <label for="email">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password">

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