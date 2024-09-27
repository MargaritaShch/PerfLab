import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import QuestionList from './components/QuestionList.vue';
import QuestionDetail from './views/QuestionDetail.vue';

const routes = [
  { path: '/', component: QuestionList },
  { path: '/questions/:id', component: QuestionDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');


