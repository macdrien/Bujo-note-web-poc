import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as HiIcons from "oh-vue-icons/icons/hi";

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app');
