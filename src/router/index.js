import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "../store/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue'),
    beforeEnter: (to, from, next) => {
      console.log(store.state.user);
      if (!store.state.user) {
        next({ name: "login" })
        return
      }
      if (!store.state.user.isAdmin) {
        next({ name: "home" })
        return
      }
      next()
    }
  }

]

const router = new VueRouter({
  routes
})




export default router
