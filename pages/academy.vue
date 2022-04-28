<template>
  <div>
    <SectionsCommonHeader />
    <section class="flex justify-between items-center">

        <div class="lg:flex items-center justify-between mt-28 lg:mt-36 container mx-auto" >

          <div class="lg:w-1/2 px-10 w-full mb-5">

              <h1 class="select-none text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 md:my-6 lg:leading-relaxed leading-normal hero-text 2xl:w-1/2">

                  It's time to learn and acquire digital Tech skills.
              </h1>

              <p class="text-base md:text- xl:text-lg mb-8">
                  Acquire the 21st century skills so as to improve your relevance and employability in this ever changing world.
              </p>
              <div>
                  <a href="@/courses.html" class="select-none px-10 py-3 font-medium hover:text-white hover:bg-primary-100 border-2 border-primary-100 text-primary-100 mt-8 mb-1 duration-500 ease-in-out">
                      Get Started
                  </a>
              </div>


          </div>

          <img :src="require('@/assets/images/hero-bg.png')" alt="" class="select-none w-full lg:w-1/2 border-b-2 pl-6 pb-1" />
        </div>
    </section> 

    <section class="flex items-center justify-center pt-24 lg:pt-28 pb-12" id="our-academy">
      <div>
          <div class="block lg:flex justify-between items-center">
              <div class="w-full hidden lg:block lg:w-1/2">
                  <img :src="require('@/assets/images/academy.jpg')" alt="" class="w-full">
              </div>
              <div class="w-full lg:w-1/2 px-10 md:px-16 2xl:px-24 py-8 lg:py-0">
                  <h1
                  class="md:text-4xl text-3xl font-bold uppercase mb-4 text-center text-primary-100 flex justify-center mx-auto">
                      Our Academy
                  </h1>
      
                  <p class="text-base md:text-lg 2xl:text-2xl">
                      An innovative and technology driven academy aimed to help and empower people who want to get into tech and 
                      digital ecosystem to thrive across africa and globally with well organized courses having upto date 
                      curriculum, our facilitators engage students by walking them through pratical approaches.
                      <br>
                      Our mission is getting more people into Tech ecosystem easily and making them achieve their passion to be 
                      professional and certified. Our HR services provides opportunity to those who may be interested in job 
                      placement and others who may still be earning while learning.
                  </p>
              </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 container mx-auto px-10" >

              <div class="p-6 py-6 md:py-8 bg-white shadow-lg flex md:block">
                  <img :src="require('@/assets/images/icons/register.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
                  <div>
                      <h1 class="xl:text-2xl text-xl font-semibold uppercase text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                      Quick Enrollment
                      </h1>
                      <p
                      class="text-left md:text-center text-base md:text-base xl:text-lg md:flex md:justify-center md:mx-auto mt-2">
                          Students can register for courses right from their comfort zones.
                      </p>
                  </div>
              </div>

              <div class="p-6 py-6 md:py-8 bg-white shadow-lg flex md:block">
                  <img :src="require('@/assets/images/icons/course.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
                  <div>
                      <h1 class="xl:text-2xl text-xl font-semibold uppercase text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                          THOROUGH CURRICULUM
                      </h1>
                      <p
                      class="text-left md:text-center text-base md:text-base xl:text-lg md:flex md:justify-center md:mx-auto mt-2">
                      Our curriculums cover several in-demand skills
                      </p>
                  </div>
              </div>

              <div class="p-6 py-6 md:py-8 bg-white shadow-lg flex md:block">
                  <img :src="require('@/assets/images/icons/environ.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
                  <div>
                      <h1 class="xl:text-2xl text-xl font-semibold uppercase text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                          CONDUSIVE AREA
                      </h1>
                      <p
                      class="text-left md:text-center text-base md:text-base xl:text-lg md:flex md:justify-center md:mx-auto mt-2">
                          Meet with creative minds in a confortable area
                      </p>
                  </div>
              </div>

              <div class="p-6 py-6 md:py-8 bg-white shadow-lg flex md:block">
                  <img :src="require('@/assets/images/icons/recruit.svg')" alt="" class="w-16 md:w-28 md:mb-6 mr-4 flex justify-center md:mx-auto">
                  <div>
                      <h1 class="xl:text-2xl text-xl font-semibold uppercase text-left md:text-center text-primary-100 md:flex md:justify-center md:mx-auto">
                          JOB PLACEMENT
                      </h1>
                      <p
                      class="text-left md:text-center text-base md:text-base xl:text-lg md:flex md:justify-center md:mx-auto mt-2">
                          Get quick access to recruitment opportunities
                      </p>
                  </div>
              </div>

          </div>
      </div>
    </section>

    <section class="items-center pt-24 lg:pt-28 pb-12 flex justify-center bg-primary-100 bg-opacity-5"  id="our-courses">
      <div class="container mx-auto">

          <div class="block lg:flex justify-between items-center mb-10">
              <div class="mx-auto mb-12 lg:mb-0 px-10 lg:w-1/2">
                  <p class="text-base md:text-lg xl:text-xl mb-1">
                      Become a certified
                  </p>
                  <h1 class="text-4xl md:text-5xl 2xl:text-7xl lg:leading-snug leading-tight capitalize 2xl:max-w-xl max-w-sm font-bold text-primary-100">
                      Creative tech professional
                  </h1>
                  <p class="text-base md:text-lg xl:text-xl mt-1 max-w-xl mb-12">
                      Our academy is a certified training centre for professionals, students and
                  companies. We conduct and train students in different courses with unique certification.
                  </p>

                  <a href="@/courses.html" class="text-lg text-primary-100 font-medium py-3 px-10 border-2 border-primary-100
                  hover:bg-primary-100 duration-500 ease-in-out hover:text-white">View our Courses</a>
              </div>

              <div class="lg:w-1/2">
                  <img :src="require('@/assets/images/work-bg.png')" alt="" class="w-full py-8 pl-8 hidden lg:block" />
              </div>
          </div>

      </div>
    </section>

    <section class="pt-24 lg:pt-28 pb-32 px-10" id="reviews/faqs">
      <div>
          <div class="">
              <h1 class="md:text-4xl text-3xl font-bold uppercase mb-4 text-center text-primary-100 flex justify-center mx-auto">
                  What They're Saying
              </h1>
              <div class="h-full slider relative ">

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          Being a student of the academy is literally one of the best thigs to ever happen to me. The support
                          is exceptional and I felt very welcome. I have never had a cause for regret and my life has been a thousand times better!
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Ismail Adekunle (Plusmore)</p>
                  </div>
    
                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          I can't believe the changes in my life since I took the Freelancing course with the academy. I have 
                          become financially free and much more qualified to venture into the tech world. Thanks Added!
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Akanmu Aliu Omotayo</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          Joining the academy has been a cornerstone in my life. I have transitioned far beyond what I could even think of
                          just a few years ago thanks to the amazing team behind the academy.
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Abdul Azeez Salaudeen</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          I had a great time with the academy.The team was committed to great service and friendly. The atmosphere was awesome and 
                          modern. Most importantly, the courses were great, really well-taught and impactful.
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Nafiu L. Olaide</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          Probably the best academy I've ever been to. I have been to a lot of academies in search of tech training and none rivals
                          Added's. They offer great courses at the best price available, and are dedicated to the success of each one of their students.
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Mutawally Abdul Baaqi</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          Thanks to the academy for being there for me during one of the most trying times if my life. I was in debt and saw no end.
                          After taking their Crypto Trading course however, things have taken a turn for the better. I am now financially free!
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Atofarati Bright</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          I love everything about the academy. The environment, the mentors, fellow students , you mention it!
                          Definitely recommend them if you are looking to get new digital skills.
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Muhammad A. Quadir</p>
                  </div>

                  <div class="bg-gray-50 p-6 mx-2 md:mx-5 xl:mx-7 width" >
                      <h1 class="text-9xl font-light opacity-20">"</h1>
                      <p class="text-base md:text-lg xl:text-xl -mt-16 pl-10">
                          For those looking for a digital skills academy, this is it. The skills I learnt, the support I received have all made my life better. I am digitally employable,
                          free to make my choices.
                      </p>

                      <p class="text-sm mt-5 flex justify-end italic">-Hassan Baqau</p>
                  </div>

              </div>
          </div>

          <div class="py-10 container mx-auto">
              <h1 class="md:text-4xl text-3xl font-bold mb-4 text-center text-primary-100 flex justify-center mx-auto">FAQs</h1>
              
              <div class="flex justify-center">
                  <div class="w-full md:px-20 lg:px-40 xl:px-52 2xl:px-80">
                      <!-- 1st accordion menu -->
                      <div class="accordion-item">
                        <div class="accordion-title" data-tab="item4">
                          <h3>Are there any online classes?<i class="fa fa-chevron-down"></i></h3>
                        </div>
                        <div class="accordion-content" id="item4">
                          <p>
                          Yes, we do offer online training for select courses. We use platforms like
                          Google Meet and Zoom for the trainings. Currently we are trying to increase
                          the number of online courses we offer.
                          </p>
                        </div>
                      </div>
        
                      <!-- 2nd accordion menu -->
                      <div class="accordion-item">
                        <div class="accordion-title" data-tab="item2">
                          <h3>Which course should I choose? <i class="fa fa-chevron-down"></i></h3>
                        </div>
                        <div class="accordion-content" id="item2">
                          <p>
                            We feel that your choice of a course should be a professional
                            decision. Everyone has their own strengths and you should play to yours.
                            Check the details of the courses to pick the one that fits you best. If you are still confused,
                              contact us and we will help you as much as we can.
                          </p>
                        </div>
                      </div>
        
                      <!-- 3rd accordion menu -->
                      <div class="accordion-item">      
                        <div class="accordion-title" data-tab="item3">
                          <h3>Can I have a private class?<i class="fa fa-chevron-down"></i></h3>
                        </div>
                        <div class="accordion-content" id="item3">
                          <p>
                            Private classes are not offered currently. Contact us and maybe we can figure something out.
                          </p>
                        </div>
                      </div>
        
                      <!-- 4th accordion menu -->
                      <div class="accordion-item">
                        <div class="accordion-title" data-tab="item5">
                          <h3>Why Added? <i class="fa fa-chevron-down"></i></h3>
                        </div>
                        <div class="accordion-content" id="item5">
                          <p>
                            Because with us, you can never go wrong! Our courses are tailored to mmet 
                            your needs and suit your learning speed and capability. Our mentors are friendly,
                            warm and caring. Our environment is safe, conducive and welcoming. In short, we are the best there is 
                            at what we do!
                          </p>
                        </div>
                      </div>

                      <!-- 5th accordion menu -->
                      <div class="accordion-item">
                          <div class="accordion-title" data-tab="item1">
                              <h3>Payment methods? <i class="fa fa-chevron-down"></i></h3>
                          </div>
                          <div class="accordion-content" id="item1">
                            <p>
                            You can pay directly via the website or you can contact us for a discussion. We are available 24/7
                            </p>
                          </div>
                          </div>
        
                  </div>
              </div>

              <div class="text-base md:text-lg xl:text-xl flex justify-center mx-auto">Have other questions? <span>
                <a href="https://wa.me/2348066600820" class="ml-2 font-semibold text-primary-100 border-b-2 border-transparent hover:border-primary-100 duration-500 ease-in-out"> Contact Us!</a></span>
              </div>

          </div>
      </div>
    </section>

    <section class="container mx-auto relative">
      <div class="bg-primary-100 p-10 md:flex items-center justify-around absolute -mt-28">
        <div class="mb-16 md:mb-0 md:w-3/5">
          <div class="text-left text-base text-white md:text-base xl:text-lg mb-2">
            What are you waiting for?
          </div>
          <h2 class="xl:text-4xl text-2xl md:text-3xl font-semibold text -left text-white">
            Pick a course and join!
          </h2>
          <div class="text-left text-base text-white md:text-base xl:text-lg mt-2">
            Join people around the world who are taking steps to better their future and become more relevant in the tech-centric world.
            We will equip you with the skills you need and be with you along every step of the way!
          </div>
        </div>

        <a href="@/courses.html" class="text-white xl:text-xl xl:border-3 text-base px-6 py-3 font-medium border-2 border-white hover:bg-white hover:text-primary-100 duration-500 ease-in-out">
          Register Now
        </a>      
      </div>
    </section>

    <SectionsCommonFooter />
  </div>
</template>

<script>
export default {

}
</script>
