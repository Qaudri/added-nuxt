<template>
  <li
    class="accordion__item"
    :class="container_class"
    :style="container_styles"
  >
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible } + ' ' + trigger_class"
      @click="open"
      :style="trigger_styles"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        class="accordion__content"
        :class="content_class"
        :style="content_styles"
        v-show="visible"
      >
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    active: {
      default: false,
      type: Boolean,
    },

    container_class: {
      type: String,
    },

    trigger_class: {
      type: String,
    },

    content_class: {
      type: String,
    },

    container_styles: {
      type: String,
    },

    trigger_styles: {
      type: String,
    },

    content_styles: {
      type: String,
    },
  },

  inject: ["allowMultiple", "Items"],

  data() {
    return {
      item: {
        active: false,
        id: this.generateRandomNumber(),
      },
    };
  },

  computed: {
    visible() {
      return this.item.active;
    },
  },
  methods: {
    generateRandomNumber() {
      let count = 0;
      return count++;
    },

    async activateFirstItem(){
      if(this.active){
        this.item.active = true
      }
      return true;
    },

    open() {
      if (this.disabled) {
        return;
      }

      if(this.allowMultiple){

        if(this.item.active === false){
          this.item.active = true;
          Object.assign({}, ...this.Items, this.item)
        }else {
          this.item.active = false;
          Object.assign({}, ...this.Items, this.item)
        }

      }else {

        this.Items.forEach(item => {
          item.active = false
        });

        this.item.active = true;
        Object.assign({}, ...this.Items, this.item)


      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.activateFirstItem().then(() => {
      this.Items.push(this.item);
    })
  },
};
</script>

<style scoped lang="scss">
.accordion__item {
  cursor: pointer;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion__content {

  ul {
    padding: 0;
    margin: 0;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>