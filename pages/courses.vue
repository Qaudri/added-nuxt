<template>
  <div>
    <div :class="formdisplayed ? 'block' : 'hidden'" class="h-full w-full fixed z-10 bg-black bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
      <div class="bg-white p-8 w-full md:w-2/3 lg:w-1/3">
        <div class="flex justify-end w-full">
          <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
        </div>
        <form action="">
          <label for="Name" class="mt-0">Name</label>
          <input type="text" name="Name" id="Name" placeholder="Enter your full name">

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email address">

          <button type="submit" class="submit">Register</button>
        </form>
      </div>
    </div>
    <SectionsCommonHeader >
      <div>
        <UiSharedLogo @emitReload="reloadThisPage" />
      </div>

      <template v-slot:menuitems >
        <UiButtonsSecondary @Pushto="whoWeAre" button_title="Back to Home" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="whatWeDo" button_title="Our Academy" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="ourServices" button_title="Our Courses" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0"/>
        <UiButtonsSecondary @Pushto="Academy" button_title="Our Reviews" class="lg:mx-4 lg:my-0 my-4 ml-10 md:ml-0" />
        <UiButtonsPrimary @pushTo="Primary" button_title="Contact Us" class="lg:ml-4 my-10 lg:my-0 mx-6 lg:mr-0 " />
      </template>
    </SectionsCommonHeader>

    <div class="container mx-auto px-10 py-28 xl:py-32">
      
    </div>

    <div class="container mx-auto px-10 py-28 xl:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <UiCardsCoursecard v-for="item in course" :key="item.id" class="bg-white"
        :imgUrl="item.imageUrl" 
        :title="item.title" 
        :duration="item.duration"
        :price="item.price">
          <div class="flex items-center">
            <UiButtonsSecondary @pushTo="showDetails" button_title="See Details" class=""/>
            <UiButtonsPrimary @Pushto="toggleForm" class="px-4 py-2 text-white font-medium" button_title="Enroll now"/>
          </div>
        </UiCardsCoursecard>

      <button @click="initializePaystack" class="px-8 py-4 bg-primary-100">Pay</button>


      </div>
    </div>  />
    <SectionsCommonFooter />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data(){
    return{
      formdisplayed: false,
      detailsdisplayed: false
    }
  },

  methods: {
    initializePaystack() {
      this.$paystack({
        key: 'pk_test_6a469a182d02a997d76fbd08f4b931f164892142', // Replace with your public key.
        email: 'stevewilsn75@gmail.com',
        amount: 500000,
        ref: '',
        currency: '#',
        callback: () => {
          // Do something.
        },
        onClose: () => {
          // Do something.
        }
      })
    },

    ...mapActions({
      setCourse: 'courses/setSelectedCourse',
    }),

    setCourse(){
      this.setCourse()
      this.detailsdisplayed = !this.detailsdisplayed
    },

    toggleForm(){
      this.formdisplayed = !this.formdisplayed
    },

    reloadThisPage(){
      this.$router.push({path:'/courses'})
    },

    whoWeAre(){
      this.$router.push({path:'/'})
    },

    whatWeDo(){
      this.$router.push({path:'/academy#our-academy'})
    },

    ourServices(){
      this.$router.push({path:'/academy#our-courses'})
    },

    Academy(){
      this.$router.push({path:'/academy#reviews/faqs'})
    },

    Primary(){
      this.$router.go({path:'https://bit.ly/3uOIVPo'})
    }
  },

  computed: {
    ...mapGetters({
      course : 'courses/getCourseItems',
      selected: 'courses/getSelectedCourse'
    })
  }
}
</script>

<style>
form{
  width: 100%;
  display: block;
  box-sizing: border-box;
}

label{
  font-weight: 600;
  color: #058182;
  margin-top: 30px;
  display: block;
}

input{
  padding: 10px 15px;
  margin: 10px 0;
  display: block;
  width: 100%;
  border: 2px solid #222222;
}


input:focus{
  border: 2px solid #058182;
  border-radius: 0;
  outline: none;
  color: #058182;
}

.submit{
  margin-top: 2rem;
  width: 100%;
  background-color: transparent;
  border: 2px solid #058182;
  text-transform: capitalize;
  padding: 10px;
  color: #058182;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.submit:hover{
  background: #058182;
  color: white;
  transition: .5s ease-in-out;
}
</style>