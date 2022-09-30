<template>
  <div class="w-full">
    <SectionsFaqsQuestion @questionClicked="toggleAnswer" class="w-full" >
      {{question}}
    </SectionsFaqsQuestion>

    <SectionsFaqsAnswer :class="answerRevealed ? 'block' : 'hidden'" class="w-full">
      {{answer}}
    </SectionsFaqsAnswer>
  </div>
</template>

<script>
export default {

  props:{
    question: String,
    answer: String,
    is_active: Boolean,
  },


  data(){
    return{
      answerRevealed: false,
    }
  },

  methods: {
    toggleAnswer(){
      this.$emit("checkActive")
      this.is_active = true
      if (this.is_active = true) {
        this.answerRevealed = !this.answerRevealed
      }
    },

  },

}
</script>

<style>

</style>