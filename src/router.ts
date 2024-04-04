import { createWebHashHistory, createRouter } from 'vue-router';
import WelcomeView from './pages/WelcomeView.vue';
import WriteView from './pages/WriteView.vue';
import ListView from './pages/ListView.vue';
import SaveView from './pages/SaveView.vue';
import { Delta } from '@vueup/vue-quill';

const routes = [
  { path: '/notes', component: ListView },
  { path: '/write', component: WriteView },
  { path: '/save', component: SaveView, props: (route: any) => ({ note: new Delta(JSON.parse(decodeURIComponent(route.query.note))) }) },
  { path: '/', component: WelcomeView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});