export const state = () => ({
  items : [
    {
      id: 1,
      question: "How do I start the game?",
      answer: "Click the login button in the navigation menu to get started.",
      active: false,
    },

    {
      id: 2,
      question: "How do I know my score?",
      answer: "Once you are done with the questions, the system reviews your submission and reveals your score.",
      active: false,
    },

    {
      id: 3,
      question: "What do I stand to gain?",
      answer: "The questions help boost and evaluate your memory and you can use them to prepare for an exam.",
      active: false,

    },

    {
      id: 4,
      question: "Can  my friend join?",
      answer: "Sure! The referral will be appreciated! It's free and anyone can join.",
      active: false,

    },

    {
      id: 5,
      question: "What happens once the quiz is over?",
      answer: "The system stores your score in a record for future purposes and uses the data to create a progess graph for you.",
      active: false,

    },

    {
      id: 6,
      question: "Who is the game for?",
      answer: "The game is for everyone who wants to test their technical knowledge.",
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