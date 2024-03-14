import { createWebHashHistory, createRouter } from 'vue-router';
import WelcomeView from './pages/WelcomeView.vue';
import WriteView from './pages/WriteView.vue';
import ListView from './pages/ListView.vue';

const routes = [
  { path: '/notes', component: ListView },
  { path: '/write', component: WriteView },
  { path: '/', component: WelcomeView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});