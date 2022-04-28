export const state = () => ({
  items : [
    {
      id: 1,
      question: "Are there any online classes?",
      answer: "Yes, we do offer online training for select courses. We use platforms like Google Meet and Zoom for the trainings. Currently we are trying to increase the number of online courses we offer.",
      active: false,
    },

    {
      id: 2,
      question: "Which course should I choose?",
      answer: "We feel that your choice of a course should be a professional decision. Everyone has their own strengths and you should play to yours. Check the details of the courses to pick the one that fits you best. If you are still confused, contact us and we will help you as much as we can.",
      active: false,
    },

    {
      id: 3,
      question: "Can I have a private class?",
      answer: "Private classes are not offered currently. Contact us and maybe we can figure something out.",
      active: false,

    },

    {
      id: 4,
      question: "Why Added?",
      answer: "Because with us, you can never go wrong! Our courses are tailored to mmet your needs and suit your learning speed and capability. Our mentors are friendly, warm and caring. Our environment is safe, conducive and welcoming. In short, we are the best there is at what we do!",
      active: false,

    },

    {
      id: 5,
      question: "Payment methods?",
      answer: "You can pay directly via the website or you can contact us for a discussion. We are available 24/7",
      active: false,

    },
  ],

  Is_user_logged: null,
})

export const getters = {
  getFaqItems(state) {
    return state.items
  }
}