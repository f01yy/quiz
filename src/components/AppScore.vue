<template>
  <div class="score">
    <div class="score__text">Итого: {{ score }}/{{ questionsLength }}</div>
    <button class="score__button" @click="handleClick">Пройти заново</button>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
    questionsLength: {
      type: Number,
      required: true,
    },
  },

  methods: {
    handleClick() {
      this.$emit('restart');
    },
  },

  emits: {
    restart: null,
  },
};
</script>

<style scoped>
.score {
  text-align: center;
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
</style>
