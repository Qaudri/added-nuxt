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
      <form action="" >
        <label for="title">Course title</label>
        <input type="text" :placeholder="course_title">

        <label for="title">Course duration</label>
        <input type="text" :placeholder="course_duration">

        <label for="title">Course price</label>
        <input type="text" :placeholder="course_price">

        <label for="title">Course decription</label>
        <input type="text" :placeholder="course_description">

        <label for="title">Course contents</label>
        <input type="text" :placeholder="course_contents">
      </form>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    course_title: String,
    course_duration: String,
    course_price: String,
    course_description: String,
    course_contents: String,
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