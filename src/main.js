import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
 import store from '../src/store/auth.js';
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VueSweetalert2 from "vue-sweetalert2";
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css';
// import "./style.css";
import router from "./router/index.js";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/main.scss";
window.axios = axios;

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
 app.use(store);
app.use(VueSweetalert2);
app.use(Antd);
app.use(pinia);
app.use(router);
app.mount("#app");
