import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount('#app');
