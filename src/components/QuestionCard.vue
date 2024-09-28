<template>
  <div @click="goToDetail" class="question-card">
    <h3 class="question-text">{{ question.question }}</h3>
    <p :class="levelClass" class="level-text">{{ levelText }}</p>

    <div class="like-section" @click.stop>
      <button @click="likeQuestion" class="like-button">👍 {{ likes }} Like</button>
    </div>

    <div class="comments-section" @click.stop>
      <h4>Комментарии:</h4>
      <ul>
        <li v-for="(comment, index) in comments" :key="index" class="comment-item">
          {{ comment }}
        </li>
      </ul>

      <textarea v-model="newComment" placeholder="Добавьте комментарий"></textarea>
      <button @click="addComment" class="add-comment-button">Добавить комментарий</button>
    </div>
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
      this.$router.push(`/questions/${this.question.id}`);
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
  margin: 15px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
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
}

.like-section {
  margin-top: 20px;
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

.like-button:hover {
  background-color: #0056b3;
}

.comments-section {
  width: 100%;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.comment-item {
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  list-style: none;
}

textarea {
  width: 95%;
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
