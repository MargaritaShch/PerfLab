<template>
  <div @click="goToDetail" class="question-card">
    <h3 class="question-text">{{ question.question }}</h3>
    <p :class="levelClass" class="level-text">{{ levelText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    question: Object
  },
  data() {
    return {
      likes: 0,
      comments: [],
      newComment: ''
    };
  },
  computed: {
    levelText() {
      return `Level: ${this.question.level}`;
    },
    levelClass() {
      return {
        'level-intern': this.question.level === 'INTERN',
        'level-junior': this.question.level === 'JUNIOR',
        'level-middle': this.question.level === 'MIDDLE'
      };
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({
        path: `/questions/${this.question.id}`,
        query: {
          category: this.question.category || 'unknown',  
          tool: this.question.tool || null  
        }
      });
    },
    likeQuestion() {
      this.likes++;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());
        this.newComment = '';
      }
    }
  }
};
</script>

<style scoped>
.question-card {
  font-family: "Roboto Slab", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 250px;
  margin: 15px auto;
  padding: 20px;
  background-color: #f0f8ff;
  border: 2px solid #007bff50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(2, 2, 252, 0);
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
}
.question-card:hover {
  background-color: #e0f0ff;
}

.question-text {
  text-align: center;
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}

.level-text {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: bold;
  margin-top: 20px;
}

.level-intern {
  color: green;
}

.level-junior {
  color: blue;
}

.level-middle {
  color: orange;
}

</style>
