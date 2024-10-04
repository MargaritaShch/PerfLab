import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import QuestionList from './components/QuestionList.vue';
import QuestionDetail from './views/QuestionDetail.vue';
import { FrontendQuestions } from './data/FrontendQuestions';
import { LoadTestingQuestions } from './data/LoadTestingQuestions';
import { BackendQuestions } from './data/BackendQuestions';
import { JmeterQuestions } from './data/tools/JmeterQuestions';
import { ChromeDevToolsQuestions } from './data/tools/ChromeDevToolsQuestions';
import { GitQuestions } from './data/tools/GitQuestions';
import { JavaQuestions } from './data/tools/JavaQuestions';
import { SystemArchitectureQuestions } from './data/tools/SystemArchitectureQuestions';
import { KafkaQuestions } from './data/tools/KafkaQuestions';
import { KubernetesQuestions } from './data/tools/KubernetesQuestions';
import ToolsList from './components/ToolsList.vue';
import CategoryList from './components/CategoryList.vue'; 

const routes = [
  { path: '/', component: CategoryList }, 
  { path: '/performance', component: QuestionList, props: { questions: LoadTestingQuestions, title: 'Performance Engineer' } },
  { path: '/frontend', component: QuestionList, props: { questions: FrontendQuestions, title: 'Frontend' } },
  { path: '/backend', component: QuestionList, props: { questions: BackendQuestions, title: 'Backend' } },
  { path: '/tools', component: ToolsList },
  { path: '/tools/:tool', component: QuestionList, props: route => ({ questions: getToolQuestions(route.params.tool), title: route.params.tool.toUpperCase() }) },
  { path: '/questions/:id', component: QuestionDetail, props: route => ({ id: route.params.id, category: route.query.category }) }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

function getToolQuestions(tool) {
  const toolsMap = {
    kubernetes: KubernetesQuestions,
    kafka: KafkaQuestions,
    architecture: SystemArchitectureQuestions,
    jmeter: JmeterQuestions,
    chrome: ChromeDevToolsQuestions,
    git: GitQuestions,
    java: JavaQuestions,
  };
  return toolsMap[tool] || [];
}

createApp(App).use(router).mount('#app');
