export const state = () =>({
  items: [
    {
      id: 1,
      preview: require('@/assets/images/icons/courses/design.svg'),      
      title: "Brand Identity Design",
      duration_in_weeks: 2,
      price: "70000",
      brief: "",
    },

    {
      id: 2,
      preview: require('@/assets/images/icons/courses/uiux.svg'),     
      title: "Graphics Design",
      duration_in_weeks: 2,
      price: "80000",
      brief: "",
    },

    {
      id: 3,
      preview: require('@/assets/images/icons/courses/ui-design.svg'),
      title: "UI/UX Design",
      duration_in_weeks: 2,
      price: "100000",
      brief: "",
    },

    {
      id: 4,
      preview: require('@/assets/images/icons/courses/front-end.svg'),
      title: "Frontend Web Development",
      duration_in_weeks: 4,
      price: "150000",
      brief: "",
    },

    {
      id: 5,
      preview: require('@/assets/images/icons/courses/back-end.svg'),
      title: "Backend Web Development",
      duration_in_weeks: 4,
      price: "180000",
      brief: "",
    },

    {
      id: 6,
      preview: require('@/assets/images/icons/courses/freelancing.svg'),
      title: "Freelancing",
      duration_in_weeks: 1,
      price: "50000",
      brief: "",
    },

    {
      id: 7,
      preview: require('@/assets/images/icons/courses/trading.svg'),
      title: "Forex Trading",
      duration_in_weeks: 1,
      price: "5000",
      brief: "",
    },

    {
      id: 8,
      preview: require('@/assets/images/icons/courses/forex.svg'),
      title: "Crypto Trading",
      duration_in_weeks: 2,
      price: "100000",
      brief: "",
    },

    {
      id: 9,
      preview: require('@/assets/images/icons/courses/digital-marketing.svg'),
      title: "Digital Marketing",
      duration_in_weeks: 2,
      price: "65000",
      brief: "",
    },
  ],
})

export const getters = {
  getCourseItems(state) {
    return state.items
  },

  getCourseTotal(state){
    return state.items.length
  }
}

export const actions = {
  listAdminCourses(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses')
        .then(response => {
          context.commit('LIST_ALL_ADMIN_COURSES', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  listStudentCourses(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.student_token

      this.$axios.$get('/api/students/courses')
        .then(response => {
          context.commit('LIST_ALL_STUDENT_COURSES', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  showAdminCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$get('/api/admins/courses/:uuid')
        .then(response => {
          context.commit('SHOW_COURSE', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  createCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$post('/api/admins/courses', {
        title: credentials.the_title,
        price: credentials.the_price,
        brief: credentials.the_brief,
        preview: credentials.the_preview,
        duration_in_weeks: credentials.the_duration
      })
        .then(response => {
          // context.commit('CREATE_NEW_COURSE', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  updateCourse(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$put('/api/admins/courses/' + credentials.uuid , {
        uuid: credentials.uuid,
        title: credentials.edit_title,
        price: credentials.edit_price,
        brief: credentials.edit_description,
        preview: credentials.edit_preview,
        duration_in_weeks: credentials.edit_duration
      })

        .then(response => {
          context.commit('UPDATE_COURSE', response.data)
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },

  deleteCourse(context, uuid){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.authentication.admin_token

      this.$axios.$delete('/api/admins/courses/' + uuid)
        .then(response => {
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  showAllCourses(context){
    return new Promise((resolve, reject) => {

      this.$axios.$get('/api/listcourses')
        .then(response => {
          context.commit('SHOW_ALL_COURSES', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  }

}

export const mutations = {
  LIST_ALL_ADMIN_COURSES(state, payload){
    state.items = payload
  },

  LIST_ALL_STUDENT_COURSES(state, payload){
    state.items = payload
  },

  SHOW_ALL_COURSES(state,payload){
    state.items = payload
  }, 

  SHOW_COURSE(state, payload){
    state.selected_course = payload
  }
}