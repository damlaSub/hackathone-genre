import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import QuestionImage1 from "../pages/QuestionImage1.vue";
import QuestionImage2 from "../pages/QuestionImage2.vue";
const delay = (t) => new Promise((r) => setTimeout(r, t)); // FF issue
import QuestTxt1 from "../pages/QuestionTexte1.vue";
import QuestTxt2 from "../pages/QuestionTexte2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/questions-img1",
      name: "qimage1",
      component: QuestionImage1,
    },
    {
      path: "/questions-img2",
      name: "qimage2",
      component: QuestionImage2,
    },
    {
      path: "/question-text1",
      name: "qtexte1",
      component: QuestTxt1,
    },
    {
      path: "/question-text2",
      name: "qtexte2",
      component: QuestTxt2,
    },
  ],
  async scrollBehavior(to, from, savedPosition) {
    await delay(0); // FF issue
    return { top: 0 };
  },
});

export default router;
