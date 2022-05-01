<template>
  <div class="w-full">
    <SectionsFaqsQuestion @questionClicked="toggleAnswer" >
      {{question}}
    </SectionsFaqsQuestion>

    <SectionsFaqsAnswer :class="answerRevealed ? 'block' : 'hidden'">
      {{answer}}
    </SectionsFaqsAnswer>
  </div>
</template>

<script>



export default {

  props:{
    question: String,
    answer: String
  },


  data(){
    return{
      answerRevealed: false,
    }
  },

  methods: {
    toggleAnswer(){
      this.answerRevealed = !this.answerRevealed
    }
  },

  // computed: {
  //   ...mapGetters({
  //     faqItems : 'faqs/getFaqItems'
  //   })
  // }

}
</script>

<style>

</style>