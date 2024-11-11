<template>
  <div>
    <h2 class = "title">{{ title }}</h2>
    <div class="filter-section">
      <select id="levelFilter" v-model="selectedAction" @change="handleAction">
        <option value="ALL">Все уровни</option>
        <option value="INTERN">Intern</option>
        <option value="JUNIOR">Junior</option>
        <option value="MIDDLE">Middle</option>
        <option value="SHUFFLE">Перемешать вопросы</option>
      </select>
    </div>

    <div class="question-grid">
      <QuestionCard
        v-for="q in filteredQuestions"
        :key="q.id"
        :question="q"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
  import QuestionCard from './QuestionCard.vue';

  export default {
    components: {
      QuestionCard,
    },
    props: {
      questions: Array,
      title: String,
      category: String,
    },
    data() {
      return {
        currentLevel: 'ALL',
        selectedAction: 'ALL',
        shuffledQuestions: [],
      };
    },
    computed: {
      filteredQuestions() {
        if (this.selectedAction === 'SHUFFLE') {
          return this.shuffledQuestions;
        }

        if (this.currentLevel === 'ALL') {
          return this.questions;
        }

        return this.questions.filter((q) => q.level === this.currentLevel);
      },
    },
    methods: {
      handleAction() {
        if (this.selectedAction === 'SHUFFLE') {
          this.shuffleQuestions();
        } else {
          this.filterLevel(this.selectedAction);
        }
      },
      filterLevel(level) {
        this.currentLevel = level;
      },
      shuffleQuestions() {
        this.shuffledQuestions = [...this.questions].sort(
          () => Math.random() - 0.5
        );
      },
    },
  };
</script>

<style scoped>
  .filter-section {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .filter-section select {
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;
  }

  .filter-section select:hover {
    border-color: #007bff;
  }

  .question-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .question-card {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    box-sizing: border-box;
  }
  .title{
    text-align: center;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    .question-grid {
      grid-template-columns: 1fr;
      padding: 0 15px;
    }
  }
</style>
