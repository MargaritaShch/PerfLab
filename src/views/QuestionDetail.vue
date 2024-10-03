<template>
  <div v-if="question" class="question-detail">
    <h2 class="question-text">{{ question.question }}</h2>
    <div class="answer-box">
      <div v-html="question.answer" class="answer-text"></div>
    </div>
    <router-link to="/" class="back-button">← Back to Questions</router-link>
    <div class="like-comments-section">
      <!-- Блок лайков -->
      <div class="like-section">
        <button @click="likeQuestion" :disabled="liked" class="like-button">
          👍 {{ likes }} Like
        </button>
      </div>

      <!-- Блок комментариев -->
      <div class="comments-section">
        <h4>Комментарии:</h4>
        <ul>
          <li v-for="(comment, index) in comments" :key="index" class="comment-item">
            <strong>{{ comment.name }}:</strong> {{ comment.text }}
          </li>
        </ul>

        <div v-if="!commentAdded">
          <input v-model="username" placeholder="Ваше имя" />
          <textarea v-model="newComment" placeholder="Добавьте комментарий"></textarea>
          <button @click="addComment" class="add-comment-button">Добавить комментарий</button>
        </div>
        <div v-else>
          <p>Вы уже оставили комментарий для этого ответа.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { FrontendQuestions } from '../data/FrontendQuestions';
import { LoadTestingQuestions } from '../data/LoadTestingQuestions';
import { BackendQuestions } from '../data/BackendQuestions';
import { JmeterQuestions } from '../data/tools/JmeterQuestions';
import { ChromeDevToolsQuestions } from '../data/tools/ChromeDevToolsQuestions';
import { GitQuestions } from '../data/tools/GitQuestions';
import { JavaQuestions } from '../data/tools/JavaQuestions';
import { SystemArchitectureQuestions } from '../data/tools/SystemArchitectureQuestions';

export default {
  data() {
    return {
      question: null
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const category = this.$route.query.category || 'unknown';
    const tool = this.$route.query.tool || null;

    let allQuestions = [];

    // Фильтрация по категориям
    if (category === 'frontend') {
      allQuestions = FrontendQuestions;
    } else if (category === 'load') {
      allQuestions = LoadTestingQuestions;
    } else if (category === 'backend') {
      allQuestions = BackendQuestions;
    } else if (category === 'tools' && tool) {

      const toolsMap = {
        architecture:SystemArchitectureQuestions,
        jmeter: JmeterQuestions,
        chrome: ChromeDevToolsQuestions,
        git: GitQuestions,
        java: JavaQuestions,
      };
      allQuestions = toolsMap[tool] || [];
    }

    this.question = allQuestions.find(q => q.id === id);
    console.log("Loaded question:", this.question);
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
  text-align: center; 
}

.question-text {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: bold;
  max-width: 80%;
  text-align: center;
}

.answer-box {
  max-width: 900px;
  width: 100%;
  padding: 20px;
  text-align: left; 
  margin-bottom: 30px; 
}

.answer-text {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify; 
  margin: 0 auto; 
  max-width: 100%; 
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
  margin-top: 20px;
}

.back-button:hover {
  background-color: #0056b3; 
}

.like-comments-section {
  width: 100%;
  max-width: 900px;
  margin: 20px auto 0;
}

.like-section {
  text-align: left;
  margin-bottom: 20px;
}

.like-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.like-button:disabled {
  background-color: #ccc;
}

.comments-section {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.comment-item {
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  list-style: none;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-comment-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.add-comment-button:hover {
  background-color: #0056b3;
}
  </style>
  