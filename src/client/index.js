import { createApp } from 'vue'
import { createWebHistory } from "vue-router";

import App from '../App.vue';
import createRouter  from '../router/index';
const app = createApp(App)
const router = createRouter(createWebHistory())
app.use(router)
router.isReady().then(() => {

  app.mount('#app')
})