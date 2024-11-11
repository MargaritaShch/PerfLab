<template>
  <div class="question-card" @click="goToDetail">
    <h3 class="question-text">{{ question.question }}</h3>
    <p v-if="!isToolCategory" :class="levelClass" class="level-text">
      {{ levelText }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      question: Object,
    },
    computed: {
      levelText() {
        return `Level: ${this.question.level}`;
      },
      levelClass() {
        return {
          'level-intern': this.question.level === 'INTERN',
          'level-junior': this.question.level === 'JUNIOR',
          'level-middle': this.question.level === 'MIDDLE',
        };
      },
      isToolCategory() {
        return this.question.category === 'tools';
      },
    },
    methods: {
      goToDetail() {
        this.$router.push({
          path: `/questions/${this.question.id}`,
          query: {
            category: this.question.category || 'unknown',
            tool: this.question.tool || null,
          },
        });
      },
    },
  };
</script>

<style scoped>
  .question-card {
    font-family: 'Roboto Slab', serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 370px;
    margin: 15px auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: relative;
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .question-card:hover {
    background-color: #f4f4f4;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .question-text {
    text-align: center;
    margin: 0;
    padding: 10px;
    font-size: 1.4rem;
    color: #333333;
  }

  .level-text {
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-weight: bold;
    font-size: 1rem;
  }

  .level-intern {
    color: #28a745;
  }

  .level-junior {
    color: #007bff;
  }

  .level-middle {
    color: #fd7e14;
  }
</style>
