import { createRouter, createWebHistory } from "vue-router";
import {
  Home,
  ProductList,
  SignUp,
  SignIn,
  ShoppingCart,
  Checkout,
  ForgetPassword,
  ResetPassword,
} from "../views";
import { useAuthStore } from "../store";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const routes = [
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
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/forget-password",
    name: "forget",
    component: ForgetPassword,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/reset-password",
    name: "reset",
    component: ResetPassword,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/shopping-cart",
    name: "shopping",
    component: ShoppingCart,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      requireAuth: true,
    },
  },
];

// const isAuthenticated = JSON.parse(localStorage.getItem("auth"))?.isAuthenticated;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useAuthStore();
  const { isAuthenticated } = userStore.user;
  if ("requireAuth" in to.meta && to.meta.requireAuth && !isAuthenticated) {
    next("/signin");
  } else if (
    "requireAuth" in to.meta &&
    !to.meta.requireAuth &&
    isAuthenticated
  ) {
    next("/");
  } else next();
});

export default router;
