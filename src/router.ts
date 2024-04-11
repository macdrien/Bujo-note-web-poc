import { createWebHashHistory, createRouter } from 'vue-router';
import WriteView from './pages/WriteView.vue';
import ListView from './pages/ListView.vue';
import SaveView from './pages/SaveView.vue';
import LoginView from './pages/LoginView.vue';
import { Delta } from '@vueup/vue-quill';
import HomeView from './pages/HomeView.vue';
import SignupView from './pages/SignupView.vue';

const routes = [
  { name: 'notes', path: '/notes', component: ListView },
  { name: 'write', path: '/write', component: WriteView },
  { name: 'save', path: '/save', component: SaveView, props: (route: any) => ({ note: new Delta(JSON.parse(decodeURIComponent(route.query.note))) }) },
  { name: 'login', path: '/login', component: LoginView },
  { name: 'signup', path: '/signup', component: SignupView },
  { name: 'home', path: '/', component: HomeView },
];

const openRoutes = ['login', 'signup'];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeResolve(async (to) => {
  if (!localStorage.getItem("token") && to.name && !openRoutes.includes(to.name.toString())) {
    return { name: "login" };
  }
});

export { router };