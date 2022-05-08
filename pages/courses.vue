<template>
  <div>
    <SectionsCommonHeader />
    <SectionsCoursesContainer @RegisterUser="register">
      <div class="h-full w-full absolute z-10 bg-black">
        <div class="bg-white p-8">
          <form action="">
            <label for="Name">Name</label>
            <input type="text" name="Name" id="Name" placeholder="Enter your full name">

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address">

            <button>Register</button>
          </form>
        </div>
      </div>
    </SectionsCoursesContainer>
    <SectionsCommonFooter />
  </div>
</template>

<script>
export default {
  data(){
    return{
      formdisplayed: false
    }
  },
  methods: {
    register(){
      this.formdisplayed = true
    }
  }
}
</script>

<style>

</style>