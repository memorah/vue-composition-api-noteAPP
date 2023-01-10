import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import VueTesting from "@/views/VueTesting.vue";
import VueButton2 from "@/views/VueButton2.vue";
import VueButton3 from "@/views/VueButton3.vue";
import VueButton4 from "@/views/VueButton4.vue";
import VueButton5 from "@/views/VueButton5.vue";
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
    {
      path: "/button2",
      name: "button2",
      component: VueButton2,
    },
    {
      path: "/button3",
      name: "button3",
      component: VueButton3,
    },
    {
      path: "/button4",
      name: "button4",
      component: VueButton4,
    },
    {
      path: "/button5",
      name: "button5",
      component: VueButton5,
    }
  ],
});
createApp(App).use(router).mount("#app");
