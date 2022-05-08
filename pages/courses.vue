<template>
  <div>
    <SectionsCommonHeader />
    <SectionsCoursesContainer @RegisterUser="register">
      <div class="h-full w-full absolute z-10 bg-black">
        <div class="bg-white p-8">

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