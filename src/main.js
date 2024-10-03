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
import ToolsList from './components/ToolsList.vue';

const routes = [
  { path: '/', component: QuestionList, props: { questions: LoadTestingQuestions } },
  { path: '/performance', component: QuestionList, props: { questions: LoadTestingQuestions } },
  { path: '/frontend', component: QuestionList, props: { questions: FrontendQuestions } },
  { path: '/backend', component: QuestionList, props: { questions: BackendQuestions } },
  { path: '/tools', component: ToolsList },
  { path: '/tools/:tool', component: QuestionList, props: route => ({ questions: getToolQuestions(route.params.tool) }) },
  { path: '/questions/:id', component: QuestionDetail }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

function getToolQuestions(tool) {
  const toolsMap = {
    architecture:SystemArchitectureQuestions,
    jmeter: JmeterQuestions,
    chrome: ChromeDevToolsQuestions,
    git: GitQuestions,
    java: JavaQuestions,
  };
  return toolsMap[tool] || [];
}

createApp(App).use(router).mount('#app');
