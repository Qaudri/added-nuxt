<template>
  <div class="slide-left fixed top-0 right-0 min-h-screen flex justify-center items-center w-full z-20 bg-white md:w-1/2 lg:w-2/5 xl:w-1/3 ">
    <div class="bg-white py-4 px-10 w-full scale-95 lg:scale-100">
      <div>
        <div class="border-b text-xl font-semibold flex justify-between">
          <p class="font-medium text-black text-lg">Update Course</p>

          <div class="">

            <button>
              <slot />
            </button>
          </div>
        </div>
      </div>
      <form action="" @submit.prevent="emitUpdateCourse(item)">
        <label for="title">Course image</label>
        <input type="text" :value="course_image">

        <label for="title">Course title</label>
        <input type="text" :value="course_title">

        <label for="title">Course duration (in weeks)</label>
        <input type="number" :value="course_duration">

        <label for="title">Course price</label>
        <input type="text" :value="course_price">

        <label for="title">Course brief</label>
        <input type="text" :value="course_description">

        <button type="submit" class="px-6 border-2 w-full mt-6 border-primary-100 text-primary-100 font-medium text-lg hover:bg-primary-100 hover:text-white ease-in-out duration-300 py-3">Update course</button>
      </form>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    course_image: String,
    course_title: String,
    course_duration: String,
    course_price: String,
    course_description: String,
  },

  methods: {
    emitUpdateCourse(item){
      this.$emit("UpdateCourseEvent", item)
    }
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
  margin-top: 20px;
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

.slide-left{
  animation: slideleft 1s forwards;
}

@keyframes slideleft {
  from{
    transform: translateX(10rem);
  }

  to{
    transform: translateX(0);
  }
}
</style>