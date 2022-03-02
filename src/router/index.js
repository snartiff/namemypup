import { createWebHistory, createRouter } from "vue-router";
import DogNameTable from "@/components/DogNameTable.vue";
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
    path: "/dognametable",
    name: "DogNameTable",
    component: DogNameTable,
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