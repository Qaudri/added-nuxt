<template>
  <div>
    <div :class="formdisplayed ? 'block' : 'hidden'" class=" h-full w-full fixed z-10 bg-black bg-opacity-40 flex items-center justify-center backdrop-filter backdrop-blur">
      <div class="scale-out bg-white p-8 w-full md:w-2/3 lg:w-1/3">
        <div class="flex justify-end w-full">
          <UiButtonsClose @closeMenu="toggleForm" class="flex items-center justify-end cursor-pointer pb-2" />
        </div>
        <form action="" @submit.prevent="Register">

          <label for="email" class="mt-0">Email</label>
          <input v-model="form.email" type="email" name="email" placeholder="Enter your email address">
          {{form.email}}

          <label for="password">Password</label>
          <input v-model="form.password" type="password" name="password"  placeholder="Choose your password">
          {{form.password}}

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

    <div :class="detailsdisplayed ? 'block' : 'hidden'" class="slide-Up bg-white fixed h-full w-full px-10 py-28 xl:py-32">
      <div class="container mx-auto">
        <div class="mb-4 w-full flex justify-end">
          <UiButtonsClose @closeMenu="hideDetails" class="cursor-pointer m-0" />
        </div>
        <div class="flex items-center ">
          <div class="pr-4 border-r w-32 h-32">
            <img ::src="selected.imageUrl" alt="" class="w-24">
          </div>
          <h1 class="text-5xl font-bold mx-3">
            {{selected.title}}
          </h1>
        </div>

        <div class="my-5">
          <h1 class="font-semibold text-primary-100 text-2xl my-3">Course Description:</h1>
          <p class="font-medium text-secondary-100">{{selected.details}}</p>
        </div>
        <div class="flex">
          <div class="text-lg font-medium mr-12">Course duration: <span class="text-primary-100">{{selected.duration}}</span></div>
          <div class="text-lg font-medium">Course price: <span class="text-primary-100">{{selected.price}}</span></div>
        </div>
        <div class="flex items-center">
          <UiButtonsPrimary @pushTo="toggleForm" class="px-4 py-2 text-white font-medium" button_title="Enroll now"/>
          <UiButtonsSecondary @Pushto="hideDetails" button_title="Check Other Courses" class="mx-6"/>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-10 py-28 xl:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <UiCardsCoursecard v-for="item in course" :key="item.id" class="bg-white"
        :imgUrl="item.imageUrl" 
        :title="item.title" 
        :duration="item.duration"
        :price="item.price">
          <div class="flex items-center">
            <UiButtonsSecondary @Pushto="showDetails(item)" button_title="See Details" class=""/>
            <UiButtonsPrimary @pushTo="toggleForm" class="px-4 py-2 text-white font-medium" button_title="Enroll now"/>
          </div>
        </UiCardsCoursecard>

      <!-- <button @click="initializePaystack" class="px-8 py-4 bg-primary-100">Pay</button> -->


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
      detailsdisplayed: false,
      form: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    // initializePaystack() {
    //   this.$paystack({
    //     key: 'pk_test_6a469a182d02a997d76fbd08f4b931f164892142', // Replace with your public key.
    //     email: 'stevewilsn75@gmail.com',
    //     amount: 500000,
    //     ref: '',
    //     currency: '#',
    //     callback: () => {
    //       // Do something.
    //     },
    //     onClose: () => {
    //       // Do something.
    //     }
    //   })
    // },

    ...mapActions({
      setCourse: 'courses/setSelectedCourse',
      register: 'authentication/registerStudent',
    }),

    Register(){
      this.register({
        email: this.form.email,
        password: this.form.password,
      })

      .then(() =>{
        this.$router.push({name: 'dashboard'})
        console.log("success")
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

        this.form.password = '';
        console.log("error")
      })
    },

    showDetails(item){
      this.setCourse(item)
      this.detailsdisplayed = !this.detailsdisplayed
    },

    hideDetails(){
      this.detailsdisplayed = false
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
      selected: 'courses/getSelectedCourse',
      auth_status: 'authentication/auth_status',
      session: 'authentication/session_token',
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

.slide-Up{
  animation: slideup 1s forwards;
}

@keyframes slideup {
  from{
    transform: translateY(10rem);
  }

  to{
    transform: translateY(0);
  }
}

.scale-out{
  animation: scaleout 1s forwards;
}

@keyframes scaleout {
  from{
    transform: scale(0);
  }

  to{
    transform: scale(1);
  }
}
</style>