<template>
  <div>
    <SectionsCommonHeader />
    <SectionsCoursesContainer @RegisterUser="register">
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