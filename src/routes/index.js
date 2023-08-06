import { createRouter, createWebHistory } from "vue-router";
import { Home, ProductList, SignUp, SignIn, ShoppingCart, Checkout } from "../views";
import { useAuthStore } from "../store";

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
      requireAuth: false
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {
      requireAuth: false
    }
  },
  {
    path: "/shopping-cart",
    name: "shopping",
    component: ShoppingCart,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      requireAuth: true
    }
  },
];

// const isAuthenticated = JSON.parse(localStorage.getItem("auth"))?.isAuthenticated;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
  const {isAuthenticated} = useAuthStore().auth;
  if('requireAuth' in to.meta && to.meta.requireAuth && !isAuthenticated){
    next("/signin")
  }
  else if( 'requireAuth' in to.meta && !to.meta.requireAuth && isAuthenticated){
    next("/")
  } else next()

})

export default router;
