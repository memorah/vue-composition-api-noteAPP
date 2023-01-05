import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import VueTesting from "@/views/VueTesting.vue";
import App from "./App.vue";

import "./assets/main.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNotes,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats,
    },
    {
      path: "/test",
      name: "test",
      component: VueTesting,
    },
  ],
});
createApp(App).use(router).mount("#app");
