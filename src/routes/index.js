import { createRouter, createWebHistory } from "vue-router";
import { Home, ProductList, SignUp, SignIn, ShoppingCart } from "../views";
import { Layout } from "../components/Layout";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/category/:id?",
        name: "product",
        component: ProductList,
      },
      {
        path: "/signup",
        name: "signup",
        component: SignUp,
      },
      {
        path: "/signin",
        name: "signin",
        component: SignIn,
      },
      {
        path: "/shopping-cart",
        name: "shopping",
        component: ShoppingCart,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
