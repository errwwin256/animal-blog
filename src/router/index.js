import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddAnimal from "../pages/AddAnimal.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/add", name: "AddAnimal", component: AddAnimal },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
