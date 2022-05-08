<template>
  <div>
    <SectionsCommonHeader />
    <SectionsCoursesContainer @RegisterUser="register"/>
    <SectionsCommonFooter />
  </div>
</template>

<script>
export default {
  methods: {
    register(){
      this.formdisplayed = true
    }
  }
}
</script>

<style>

</style>