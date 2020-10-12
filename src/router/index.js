import { createWebHistory, createRouter } from "vue-router";
import DogNameGenerator from "@/components/DogNameGenerator.vue";
import Favorites from "@/components/Favorites.vue";
import Home from "@/components/Home.vue";
import Products from "@/components/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dognamegenerator",
    name: "DogNameGenerator",
    component: DogNameGenerator,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;