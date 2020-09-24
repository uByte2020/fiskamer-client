import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Cadastra, Login, About } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Cadastrar',
    name: 'Cadastrar',
    component: Cadastra,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
