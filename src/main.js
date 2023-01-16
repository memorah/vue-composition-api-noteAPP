import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router/index.js";
import App from "./App.vue";
import "./assets/main.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
