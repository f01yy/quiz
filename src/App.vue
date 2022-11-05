<template>
  <div class="App">
    <h1 class="title">
      <span class="question-number">№{{ currentQuestionIndex + 1 }}.</span> Из
      какого фильма кадр?
    </h1>
    <div class="score">Ваш счет: {{ score }}</div>
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
  </div>
</template>

<script>
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
      setTimeout(() => {
        if (answer.correct) {
          this.$refs.answers.querySelector(
            `div:nth-child(${idx + 1})`
          ).style.backgroundColor = '#34eb52';
          this.score += 1;
        } else {
          this.$refs.answers.querySelector(
            `div:nth-child(${idx + 1})`
          ).style.backgroundColor = '#eb4034';
        }
      }, 300);

      setTimeout(() => {
        if (this.currentQuestionIndex === this.questions.length - 1) {
          console.log('END');
        } else {
          this.currentQuestionIndex += 1;
        }
      }, 600);
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
  font-size: 20px;
  position: fixed;
  left: 20px;
  top: 20px;
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
