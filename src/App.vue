<template>
  <div class="App">
    <h1 class="title">
      <span v-if="currentQuestionIndex >= 0" class="question-number"
        >№{{ currentQuestionIndex + 1 }}.</span
      >
      Из какого фильма кадр?
    </h1>
    <app-question
      v-if="questions[currentQuestionIndex]"
      @answer-clicked="handleAnswerClicked"
      :question="questions[currentQuestionIndex]"
    />

    <app-score
      @restart="handleRestart"
      v-else
      :score="score"
      :questionsLength="questions.length"
    />
  </div>
</template>

<script>
// 1. Разбить на компоненты [+]
// 2. Подсвечивать правильный ответ в случае выбора неправильного [+]
// 3 (опционно). Добавить стартовый экран []

import { fetchQuestions } from './api.js';

import AppQuestion from './components/AppQuestion.vue';
import AppScore from './components/AppScore.vue';

export default {
  name: 'App',

  components: {
    AppQuestion,
    AppScore,
  },

  data() {
    return {
      score: 0,
      questions: [],
      currentQuestionIndex: 0,
    };
  },

  async created() {
    this.questions = JSON.parse(await fetchQuestions());
  },

  methods: {
    handleAnswerClicked({ answer, idx, answerRefs }) {
      if (answer.correct) {
        answerRefs.querySelector(
          `div:nth-child(${idx + 1})`
        ).style.backgroundColor = '#129625';
        this.score += 1;
      } else {
        const correctAnswerIndex = this.questions[
          this.currentQuestionIndex
        ].answers.findIndex((element) => element.correct);

        answerRefs.querySelector(
          `div:nth-child(${idx + 1})`
        ).style.backgroundColor = '#a32121';

        setTimeout(() => {
          answerRefs.querySelector(
            `div:nth-child(${correctAnswerIndex + 1})`
          ).style.backgroundColor = '#129625';
        }, 800);
      }

      setTimeout(() => {
        if (this.currentQuestionIndex === this.questions.length - 1) {
          this.currentQuestionIndex = -1;
        } else {
          this.currentQuestionIndex += 1;
        }
      }, 1600);
    },

    handleRestart() {
      this.currentQuestionIndex = 0;
      this.score = 0;
    },
  },

  watch: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Serif', serif;
  background-color: rgb(68, 8, 125);
  color: aliceblue;
}
.App {
  padding: 0 20px;
}
.question-number {
  font-size: 24px;
  color: rgb(85, 255, 215);
}
.title {
  font-size: 28px;
  text-align: center;
}
</style>
