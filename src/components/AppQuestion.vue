<template>
  <div class="question">
    <div class="img-wrapper">
      <img :src="question?.imgUrl" :alt="question?.id" />
    </div>
    <div class="answers" ref="answers">
      <div
        v-for="(answer, idx) in question?.answers"
        :key="answer.text"
        @click="handleClick(answer, idx, $refs.answers)"
        class="answers__item"
      >
        {{ answer.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },

  emits: {
    'answer-clicked': null,
  },

  data() {
    return {};
  },

  methods: {
    handleClick(answer, idx, answerRefs) {
      this.$emit('answer-clicked', { answer, idx, answerRefs });
    },
  },
};
</script>

<style scoped>
.question {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.img-wrapper {
  width: 100%;
  max-width: 800px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.answers {
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
.answers__item {
  flex-grow: 1;
  background-color: blueviolet;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
}
.answers__item:hover {
  background-color: rgb(110, 20, 195);
  transition: all 0.2s;
}
</style>
