import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// 创建vue实例
const app = createApp(App);
import 'vuetify/styles'; // Global CSS has to be imported
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
const vuetify = createVuetify({
    components,
    directives
});

app.use(store);
app.use(router);
app.use(vuetify);
// 挂载实例
app.mount('#app');
