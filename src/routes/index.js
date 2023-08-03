import { createRouter, createWebHistory } from "vue-router";
import Home from '.././views/Home.vue'
import ProductList from '.././views/ProductList.vue'

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/category/:id?",
    name: 'Product',
    component: ProductList
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
