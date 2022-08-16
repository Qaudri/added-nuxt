<template>
  <div class="lg:hidden" @click="revealMenuEvent">
    <div class="w-8">
      <div :class="(mobile_nav ? 'transition transform rotate-45 my-0 w-8' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')" class="block cursor-pointer" style="height: 3px;"></div>
      <div :class="(mobile_nav ? 'transition transform -rotate-45 my-0 w-8 -mt-0.5' : 'transition my-1.5 w-8') + ' ' + (BlockBackground ? 'bg-primary-100' : 'bg-primary-100')"  class="block cursor-pointer" style="height: 3px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    BlockBackground: Boolean
  },

  data(){
    return{
      mobile_nav:false,
    }
  },
  methods: {
    revealMenuEvent(){
      this.mobile_nav = !this.mobile_nav
      this.$emit("revealMenu")
    }
  }
}
</script>