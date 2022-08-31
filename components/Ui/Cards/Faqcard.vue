<template>
  <div class="w-full">
    
    <SectionsFaqsAccordion>

      <SectionsFaqsAccordionItem container_class="bg-gray-50 border p-2 my-3">

        <template #accordion-trigger>
          <SectionsFaqsQuestion @questionClicked="toggleAnswer" class="w-full" >
            {{question}}
          </SectionsFaqsQuestion>
          </template>

        <template #accordion-content>
          <SectionsFaqsAnswer :class="answerRevealed ? 'block' : 'hidden'" class="w-full">
            {{answer}}
          </SectionsFaqsAnswer>

        </template>
      </SectionsFaqsAccordionItem>
    </SectionsFaqsAccordion>
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