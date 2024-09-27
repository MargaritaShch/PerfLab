import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import QuestionList from './components/QuestionList.vue';
import QuestionDetail from './views/QuestionDetail.vue';

const routes = [
  { path: '/', component: QuestionList },
  { path: '/questions/:id', component: QuestionDetail }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount('#app');
