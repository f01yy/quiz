<template>
  <div class="App">
    <h1 class="title">
      <span v-if="currentQuestionIndex >= 0" class="question-number"
        >№{{ currentQuestionIndex + 1 }}.</span
      >
      Из какого фильма кадр?
    </h1>
    <div class="question" v-if="questions[currentQuestionIndex]">
      <div class="img-wrapper">
        <img
          :src="questions[currentQuestionIndex].imgUrl"
          :alt="questions[currentQuestionIndex].id"
        />
      </div>
      <div class="answers" ref="answers">
        <div
          v-for="(answer, idx) in questions[currentQuestionIndex].answers"
          :key="answer.text"
          @click="handleClick(answer, idx)"
          class="answers__item"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
    <div v-else :style="{ textAlign: 'center' }" class="score">
      <div class="score__text">Итого: {{ score }}/{{ questions.length }}</div>
      <button class="score__button" @click="restartQuiz">Пройти заново</button>
    </div>
  </div>
</template>

<script>
// 1. Разбить на компоненты []
// 2. Подсвечивать правильный ответ в случае выбора неправильного []
// 3 (опционно). Добавить стартовый экран []

import { fetchQuestions } from './api.js';

export default {
  name: 'App',

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
    handleClick(answer, idx) {
      if (answer.correct) {
        this.$refs.answers.querySelector(
          `div:nth-child(${idx + 1})`
        ).style.backgroundColor = '#129625';
        this.score += 1;
      } else {
        this.$refs.answers.querySelector(
          `div:nth-child(${idx + 1})`
        ).style.backgroundColor = '#a32121';
      }

      setTimeout(() => {
        if (this.currentQuestionIndex === this.questions.length - 1) {
          this.currentQuestionIndex = -1;
        } else {
          this.currentQuestionIndex += 1;
        }
      }, 800);
    },

    restartQuiz() {
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
.score {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 20px;
  border-radius: 13px;
  font-weight: 700;
  background-color: aliceblue;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.score__text {
  font-size: 26px;
  color: rgb(20, 20, 20);
}
.score__button {
  background-color: transparent;
  height: 30px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid rgb(20, 20, 20);
  padding: 15px 10px;
  transition: all 0.2s;
  border-radius: 10px;
}
.score__button:hover {
  color: aliceblue;
  background-color: rgb(20, 20, 20);
}
.question-number {
  font-size: 24px;
  color: rgb(85, 255, 215);
}
.question {
  max-width: 1270px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.title {
  font-size: 28px;
  text-align: center;
}
.img-wrapper {
  height: 450px;
  object-fit: contain;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
}
.answers {
  gap: 5px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.answers__item {
  background-color: blueviolet;
  padding: 20px;
  font-size: 22px;
  cursor: pointer;
}
.answers__item:hover {
  background-color: rgb(110, 20, 195);
  transition: all 0.2s;
}
</style>
