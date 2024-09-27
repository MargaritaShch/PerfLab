<template>
  <div v-if="question" class="question-detail">
    <h2 class="question-text">{{ question.question }}</h2>
    <div class="answer-box">
      <div v-html="question.answer" class="answer-text"></div>
    </div>
    <router-link to="/" class="back-button">← Back to Questions</router-link>
  </div>
</template>
  
<script>
import { questions } from '../data/questions';

export default {
  data() {
    return {
      question: null
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    this.question = questions.find(q => q.id === id);
  }
}
</script>
  
  <style scoped>
  .question-detail {
    font-family: "Roboto Slab", serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center; /* Выравнивание всего текста по центру */
}

.question-text {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.answer-box {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  text-align: left; /* Выравнивание текста внутри ответа по левому краю */
  margin-bottom: 30px; /* Отступ снизу */
}

.answer-text {
  font-size: 1.2rem;
  line-height: 1.5;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: bold;
}

.back-button:hover {
  background-color: #0056b3; /* Темно-синий цвет при наведении */
}
  </style>
  