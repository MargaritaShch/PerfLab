<template>
    <div class="category-list">
      <h2>Выберите категорию</h2>
      <div class="category-cards">
        <div class="category-card">
          <router-link :to="{ path: '/performance' }">Performance Engineer</router-link>
        </div>
        <div class="category-card">
          <router-link :to="{ path: '/frontend' }">Frontend</router-link>
        </div>
        <div class="category-card">
          <router-link :to="{ path: '/backend' }">Backend</router-link>
        </div>
        <div class="category-card">
          <router-link :to="{ path: '/tools' }">Tools</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryList',
  };
  </script>
  
  <style scoped>
.category-list {
  font-family: "Roboto Slab", serif;
  text-align: center;
  margin-top: 20px;
}

h2 {
  color: #007bff;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.category-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-card {
  background-color: #f8fafc; 
  border: 2px solid #d1e7ff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.category-card:hover {
  background-color: #e0efff; 
  transform: translateY(-5px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.category-card a {
  text-decoration: none;
  color: #0056b3;
  font-size: 1.8rem;
  font-weight: 600;
}

.category-card a:hover {
  color: #003d80;
}

@media (max-width: 768px) {
  .category-card {
    width: 90%;
  }
}
  </style>
  